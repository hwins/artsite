from django import template

register = template.Library()

@register.filter(name="item_in_url_path")
def item_in_url_path(item_url, request_path):
    """This tag returns true if the item is in the active path
    """
    url_path = str(item_url).strip('/')
    path_nodes = str(request_path).split('/')
    return url_path in path_nodes