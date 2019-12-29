from django.urls import path


from .views import IndexView
from .views import ProductView
from .views import ServiceView
from .views import AboutView
from .views import ContactView
from .views import SingleView


urlpatterns = [
    path('index/', IndexView.as_view(), name='index'),
    path('product/', ProductView.as_view(), name='product'),
    path('services/', ServiceView.as_view(), name='services'),
    path('single/', SingleView.as_view(), name='single'),
    path('about/', AboutView.as_view(), name='about'),
    path('contact/', ContactView.as_view(), name='contact'),
]
