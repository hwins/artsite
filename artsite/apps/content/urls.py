from django.conf.urls import patterns

urlpatterns = patterns('artsite.apps.content.views',
                       )

urlpatterns += patterns('django.contrib.flatpages.views',
                        (r'^(?P<url>)$', 'flatpage'),
                        (r'^(?P<url>.*/)$', 'flatpage'),
                        )
