from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from django.http.response import Http404
from django.views.generic import ListView
from django.views.generic.detail import DetailView

from artsite.apps.content.models import Event, Gallery, Image


class ImageDetailView(DetailView):
    """View to display a single image. Get the gallery for the image
    so the context can be filled with previous and next images for
    navigation. Note the sort order (meta data) determines the order.
    """
    template_name = 'image_detail.html'
    gallery_slug = ''
    image_slug = ''
    slug_field = 'image_slug'
    slug_url_kwarg = 'image'
    
    def get(self, request, gallery=None, image=None,
            *args, **kwargs):
        self.gallery_slug = gallery
        self.image_slug = image
        return DetailView.get(self, request, *args, **kwargs)
    
    def get_context_data(self, **kwargs):
        context = super(ImageDetailView, self).\
            get_context_data(**kwargs)
        
        context_gallery_id = context['image'].gallery_id 
        images_in_gallery = Image.objects.\
            filter(gallery__exact=context_gallery_id).\
            order_by('sort_weight')
        
        image_slugs_list = []
        curr_image_position = 0
        for idx, i in enumerate(images_in_gallery):
            image_slugs_list.insert(idx, i.image_slug)
            if i.image_slug == self.image_slug:
                curr_image_position = idx 
        
        # can not have a negative index in this situation
        if curr_image_position > 0:
            try:
                context['prev_image_slug'] = \
                    image_slugs_list[curr_image_position - 1]
            except IndexError:
                context['prev_image_slug'] = None
        else:
            context['prev_image_slug'] = None
        
        try:
            context['next_image_slug'] = \
                image_slugs_list[curr_image_position + 1]
        except IndexError:
            context['next_image_slug'] = None

        return context
    
    def get_queryset(self):
        try:
            queryset = Image.objects.all()
        except ObjectDoesNotExist:
            raise Http404
        return queryset


class GalleryDetailView(DetailView):
    """View to display a gallery with its children images"""
    
    template_name = 'gallery.html'
    gallery_slug = ''
    slug_field = 'gallery_slug'
    slug_url_kwarg = 'gallery'

    def get(self, request, gallery_slug=None, *args, **kwargs):
        self.gallery_slug = gallery_slug
        return DetailView.get(self, request, *args, **kwargs)
 
    def get_context_data(self, **kwargs):
        context = super(GalleryDetailView, self).\
            get_context_data(**kwargs)
        context_gallery_pk = context['gallery'].pk
        context['images'] = Image.objects.\
            filter(gallery__exact=context_gallery_pk)         
        return context
        
    def get_queryset(self):
        try:
            queryset = Gallery.objects.all()
        except ObjectDoesNotExist:
            raise Http404
        return queryset


class EventsListView(ListView):
    template_name = 'events_template.html'

    def get_queryset(self):
        queryset = Event.objects.\
            filter(released=True).\
            order_by('-event_date')
        return queryset
