# this module will override default settings with
# development environment values

import os
from django.conf.global_settings import APPEND_SLASH
#
path = os.path.abspath(os.path.dirname(__file__))
PROJECT_PATH = os.path.normpath(os.path.join(path,  ".."))
#
DEBUG = True
TEMPLATE_DEBUG = True
#
#MEDIA_ROOT = ''
MEDIA_ROOT = os.path.normpath(os.path.join(PROJECT_PATH, '../media'))
MEDIA_URL = '/media/'

STATIC_ROOT = '/home/developer/git/artsite/static/'
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(PROJECT_PATH, 'static/'),
)
