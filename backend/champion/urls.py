from django.urls import path

from . import views

app_name = 'champion'

urlpatterns = [
    path('allchampion/', views.get_all_champion, name='all_champion'),
    path('<int:champion_id>/', views.get_champion_rune, name='champion_rune'),
]
