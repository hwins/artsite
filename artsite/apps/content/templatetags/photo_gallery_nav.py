from django import template
from django.db.models import get_model

register = template.Library()

Gallery = get_model('photologue', 'Gallery')
Photo = get_model('photologue', 'Photo')


@register.inclusion_tag('photologue/forward_in_gallery.html')
def forward_in_gallery(photo, gallery):
    return {'photo': photo.get_next_in_gallery(gallery)}


@register.inclusion_tag('photologue/backward_in_gallery.html')
def backward_in_gallery(photo, gallery):
    return {'photo': photo.get_previous_in_gallery(gallery)}
