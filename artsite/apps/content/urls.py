from django.conf.urls import patterns, url
from artsite.apps.content.views import ArtGalleryDetailView
from artsite.apps.content.views import EventsListView

urlpatterns = patterns('artsite.apps.content.views',
                       url(r'^art-images/(?P<slug>[\-\d\w]+)/$',
                            ArtGalleryDetailView.as_view(),
                           ),
                       url(r'^news/$',
                           EventsListView.as_view(),
                           ),
                       )

urlpatterns += patterns('django.contrib.flatpages.views',
                        url(r'^(?P<url>)$', 'flatpage'),
                        url(r'^(?P<url>.*/)$', 'flatpage'),
                        )
