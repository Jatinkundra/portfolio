from django import forms


class ReceiverForm(forms.Form):
	email_id = forms.EmailField()