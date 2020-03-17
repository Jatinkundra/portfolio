from django import template

register = template.Library()

@register.filter(name = 'get_from_list')
def get_from_list(index,list):
    return list[index]	

@register.filter(name = 'get_value')
def get_value(dict, key):
    return dict[key]

@register.filter(name = 'multiply')
def multiply(num1, num2):
    return num1*num2

@register.filter(name = 'subtract')
def subtract(num1, num2):
    return num1-num2