from django.shortcuts import render
from . import models
# Create your views here.


def index(request):
	candidate = models.Resume.objects.get(id__exact = 1)
	qualifications = models.Qualification.objects.all().filter(candidate__id__exact = 1)
	projects = models.Project.objects.all().filter(candidate__id__exact = 1)
	projects_list=[]
	for pro in projects:
		projects_dict={}
		projects_dict['name']=pro.name
		projects_dict['link']=pro.link
		projects_dict['description']=pro.description
		projects_dict['image']=pro.image.url
		projects_list.append(projects_dict)


	expertise = models.Expertise.objects.all().filter(candidate__id__exact = 1)

	return render(request, 'index.html', {	'candidate':candidate,  
											'qualifications':qualifications, 
											'expertise':expertise, 
											'projects':projects, 
											'projects_count':range((projects.count()//3)),
											'projects_residue':range((projects.count()%3)),
											'projects_list':projects_list, 
											'three':range(3), 
										})

