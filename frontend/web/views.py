from django.views import View
from django.views.generic import TemplateView
from django.http import HttpResponse

# Create your views here.
class RootView(TemplateView):
    template_name = 'root.html'
