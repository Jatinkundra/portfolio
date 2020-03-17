from django.db import models

# Create your models here.


class Resume(models.Model):
	id = models.PositiveIntegerField(blank=False, primary_key = True)
	name = models.CharField(max_length = 50)
	about = models.TextField()
	contact = models.BigIntegerField()
	resume_pdf = models.FileField(upload_to = 'resume/')
	email_id = models.EmailField()
	link = models.URLField()
	skype = models.URLField() 
	twitter = models.URLField() 
	github = models.URLField() 
	linkedin = models.URLField() 

	def __str__(self):
		return self.name




class Qualification(models.Model):
	candidate = models.ForeignKey('Resume',related_name='qualifications',on_delete=models.CASCADE)
	name = models.CharField(max_length = 50)
	field = models.CharField(max_length = 50)
	institution = models.TextField()
	year = models.PositiveIntegerField()
	grade = models.CharField(max_length = 10)
	link = models.URLField()

	def __str__(self):
		return self.name



class Project(models.Model):
	candidate = models.ForeignKey('Resume',related_name='projects',on_delete=models.CASCADE)
	name = models.CharField(max_length = 50)
	image = models.ImageField(upload_to = 'projects/', blank = False)
	description = models.TextField()
	link = models.URLField()

	def __str__(self):
		return self.name



class Expertise(models.Model):
	candidate = models.ForeignKey('Resume',related_name='expertise',on_delete=models.CASCADE)
	name = models.CharField(max_length = 50)
	image = models.ImageField(upload_to = 'expertise/', blank = False)
	message = models.TextField()

	def __str__(self):
		return self.name