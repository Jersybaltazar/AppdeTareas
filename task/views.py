from rest_framework import viewsets
from .serializer import TaskSerializer
from.models import Tarea


class TaskVIew(viewsets.ModelViewSet):
    serializer_class  = TaskSerializer
    queryset  = Tarea.objects.all()