from django.conf.urls import patterns, url

from artsite.apps.content.views import EventsListView
from artsite.apps.content.views import GalleryDetailView
from artsite.apps.content.views import ImageDetailView


urlpatterns = patterns('artsite.apps.content.views',
                       url(r'^art-images/' + \
                           '(?P<gallery>[\-\d\w]+)/$',
                           GalleryDetailView.as_view(),
                           ),
                       url(r'^art-images/' + \
                           '(?P<gallery>[\-\d\w]+)/' + \
                           '(?P<image>[\-\d\w]+)/$',
                           ImageDetailView.as_view(),
                           ),
                       url(r'^news/$',
                           EventsListView.as_view(),
                           ),
                       )

urlpatterns += patterns('django.contrib.flatpages.views',
                        url(r'^(?P<url>)$', 'flatpage'),
                        url(r'^(?P<url>.*/)$', 'flatpage'), 
                        )
