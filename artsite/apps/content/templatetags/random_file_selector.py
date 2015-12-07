from random import Random

from django import template


register = template.Library()


@register.simple_tag
def random_file_number():
    """Select a random number 00-09"""
    rand = Random()
    tens = 0
    ones = rand.randint(0, 9)
    return str(tens) + str(ones)
