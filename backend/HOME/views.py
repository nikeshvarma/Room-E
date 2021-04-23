from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Flat
from .serializer import AllFlatSerializer, FlatDetailSerializer

User = get_user_model()


class AllFlatView(ListAPIView):
    serializer_class = AllFlatSerializer

    def get_queryset(self):
        return Flat.objects.all()


class FlatDetailView(RetrieveAPIView):
    serializer_class = FlatDetailSerializer

    queryset = Flat.objects.all()

    def get_object(self):
        flat_id = self.request.query_params.get('flat_id')
        return Flat.objects.get(id=flat_id)

    def handle_exception(self, exc):
        return Response(data={'error': 'invalid flat id'}, status=status.HTTP_404_NOT_FOUND)


class FlatContactDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        flat_id = request.query_params.get('flat_id')
        flat = Flat.objects.get(id=flat_id)
        user = flat.owner
        data = {
            'name': user.first_name + ' ' + user.last_name,
            'email': user.email,
            'phone_number': user.phone_number
        }
        return Response(data=data, status=status.HTTP_200_OK)


class FilterSearchView(ListAPIView):
    serializer_class = AllFlatSerializer

    def ordering(self, queryset):
        order = self.request.query_params.get('order')

        if order == 'rent-inc':
            return queryset.order_by('rent')

        elif order == 'rent-dec':
            return queryset.order_by('-rent')

        elif order == 'size-inc':
            return queryset.order_by('size')

        elif order == 'size-dec':
            return queryset.order_by('-size')

    def get_queryset(self):
        city = self.request.query_params.get('city')
        flat_types = self.request.query_params.getlist('flat_types[]')
        budget = self.request.query_params.getlist('budget[]')
        area = self.request.query_params.getlist('area[]')

        if city != '' and area[0] != '' and area[1] != '' and budget[0] != '' and budget[1] != '' and len(flat_types):
            query = Flat.objects.filter(city__iexact=city, rooms__in=flat_types, rent__range=budget, size__range=area)
            query = self.ordering(query)
            return query

        if city != '' and area[0] != '' and area[1] != '' and budget[0] != '' and budget[1]:
            query = Flat.objects.filter(city__iexact=city, size__range=area, rent__range=budget)
            query = self.ordering(query)
            return query

        if city != '' and len(flat_types):
            query = Flat.objects.filter(city__iexact=city, rooms__in=flat_types)
            query = self.ordering(query)
            return query

        if city != '' and budget[0] != '' and budget[1] != '':
            query = Flat.objects.filter(city__iexact=city, rent__range=budget)
            query = self.ordering(query)
            return query

        if city != '' and area[0] != '' and area[1] != '':
            query = Flat.objects.filter(city__iexact=city, size__range=area)
            query = self.ordering(query)
            return query

        if city != '':
            query = Flat.objects.filter(city__iexact=city)
            query = self.ordering(query)
            return query
