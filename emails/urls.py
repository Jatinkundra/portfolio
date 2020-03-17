from django.urls import path
from . import views

app_name = 'emails'

urlpatterns = [
				
				path('send/<str:receiver>/',views.sendEmail, name='send'),
				path('getReceiver/', views.getReceiver, name='getReceiver'),
]