#from django.views import View
from django.views.generic import TemplateView
from django.conf import settings

# Create your views here.
class RootView(TemplateView):
    template_name = 'root.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['backend_api_server'] = settings.BACKEND_API_SERVER

        return context
