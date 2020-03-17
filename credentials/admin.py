from django.contrib import admin
from . import models
# Register your models here.


admin.site.register(models.Resume)
admin.site.register(models.Qualification)
admin.site.register(models.Project)
admin.site.register(models.Expertise)