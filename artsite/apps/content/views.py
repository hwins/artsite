from photologue.views import GalleryDetailView
from django.views.generic import ListView
from artsite.apps.content.models import Event


class ArtGalleryDetailView(GalleryDetailView):
    template_name = 'image_template.html'

    def get_queryset(self):
        queryset = GalleryDetailView.get_queryset(self)
        return queryset


class EventsListView(ListView):
    template_name = 'events_template.html'

    def get_queryset(self):
        queryset = Event.objects.\
            filter(released=True).\
            order_by('-event_date')
        return queryset
