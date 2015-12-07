from datetime import date

from django import template


register = template.Library()


@register.simple_tag
def current_year():
    """returns the current year to avoid hard code copyright"""
    return date.today().year
