from photologue.views import GalleryDetailView


class ArtGalleryDetailView(GalleryDetailView):
    template_name = 'image_template.html'

    def get_queryset(self):
        queryset = GalleryDetailView.get_queryset(self)
        return queryset
