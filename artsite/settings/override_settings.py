# this module will override default settings with
# development environment values
# from django.conf.global_settings import CSRF_COOKIE_SECURE

import os
from django.conf.global_settings import APPEND_SLASH
#
path = os.path.abspath(os.path.dirname(__file__))
PROJECT_PATH = os.path.normpath(os.path.join(path,  ".."))
 
DEBUG = True
TEMPLATE_DEBUG = True
 
MEDIA_ROOT = ''
MEDIA_ROOT = os.path.normpath(os.path.join(PROJECT_PATH, '../media'))
MEDIA_URL = '/media/'
  
STATIC_ROOT = '/home/developer/git/artsite/static/'
STATIC_URL = '/static/'
STATICFILES_DIRS = (
                    os.path.join(PROJECT_PATH, 'static/'),
                    )

# MIDDLEWARE_CLASSES = (
#     'django.middleware.security.SecurityMiddleware',
#     'django.contrib.sessions.middleware.SessionMiddleware',
#     'django.middleware.common.CommonMiddleware',
#     'django.middleware.csrf.CsrfViewMiddleware',
#     'django.contrib.auth.middleware.AuthenticationMiddleware',
#     'django.contrib.messages.middleware.MessageMiddleware',
#     'django.middleware.clickjacking.XFrameOptionsMiddleware',
#     'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
# )
# 
# SESSION_COOKIE_DOMAIN = ".howardwinston.com"
# SESSION_COOKIE_SECURE = True
# CSRF_COOKIE_SECURE = True
# CSRF_COOKIE_HTTPONLY = True
# X_FRAME_OPTIONS = 'DENY'


