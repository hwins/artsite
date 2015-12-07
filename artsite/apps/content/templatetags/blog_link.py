from django import template

register = template.Library()


@register.simple_tag
def blog_link_line():
    """link to blog or other hard code hacks if needed"""
    link_line = '<p>If you are more interested in foolish ' + \
        'pontifications and other nonsense, follow this ' + \
        '<a href="http://blog.howardwinston.com">link to my BLOG</a>.</p>'
    return link_line
