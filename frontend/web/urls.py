from django.urls import path
from . import views

# Create your urls here.
urlpatterns = [
    path('', views.RootView.as_view(), name="root")
]
