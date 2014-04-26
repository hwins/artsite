from django.conf.urls import patterns, url
from artsite.apps.content.views import ArtGalleryDetailView

urlpatterns = patterns('artsite.apps.content.views',
                       url(r'^art-images/(?P<slug>[\-\d\w]+)/$',
                            ArtGalleryDetailView.as_view(),
                           ),
                       )

urlpatterns += patterns('django.contrib.flatpages.views',
                        url(r'^(?P<url>)$', 'flatpage'),
                        url(r'^(?P<url>.*/)$', 'flatpage'),
                        )
