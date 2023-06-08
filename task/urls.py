from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from task import views

#api version
router = routers.DefaultRouter()
router.register(r'task',views.TaskVIew,'task')

urlpatterns = [
    path("api/v1/",include(router.urls)),
    path('docs/', include_docs_urls(title="Tarea API")),
]