from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Item

# Create your views here.

class IndexView(TemplateView):
    template_name = "shop/index.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['items'] = Item.objects.all()
        return context

class ProductView(TemplateView):
    template_name = "shop/product.html"

class ServiceView(TemplateView):
    template_name = "shop/services.html"

class AboutView(TemplateView):
    template_name = "shop/about.html"

class ContactView(TemplateView):
    template_name = "shop/contact.html"

class SingleView(TemplateView):
    template_name = "shop/single.html"


