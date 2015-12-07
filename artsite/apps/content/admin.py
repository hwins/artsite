import datetime
import string

from django import forms
from django.contrib import admin
from django.contrib.admin import options, widgets
from django.contrib.flatpages.admin import FlatpageForm, FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from django.utils.text import slugify

from artsite.apps.content import models
from tinymce.widgets import TinyMCE


class FlatpageFormWithTinyMCE(FlatpageForm):
    """Flat Page Form with TinyMCE
    This is to override the standard flatpage input with a WYSIWYG
    editor.
    """

    class Meta:
        model = FlatPage
        fields = '__all__'
        widgets = {
                   'content': TinyMCE(attrs={'cols': 120, 'rows': 60}),
                   }


class FlatpageAdminWithTinyMCE(FlatPageAdmin):
    """Flat Page Admin with TinyMCE
    """
    form = FlatpageFormWithTinyMCE


admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatpageAdminWithTinyMCE)


class EventAdminForm(forms.ModelForm):
    details = forms.CharField(widget=TinyMCE())
    event_date = forms.DateTimeField(
                                       required=False,
                                       widget=widgets.AdminSplitDateTime,
                                       )

    def clean_event_date(self):
        """If released must have an event date
        """

        if self.cleaned_data['event_date'] == None:
            if self.cleaned_data['released'] == True:
                event_date_error = 'Must set an event date if released'
                raise forms.ValidationError(event_date_error)

        return self.cleaned_data['event_date']

    class Meta:
        pass


class EventAdmin(options.ModelAdmin):
    model = models.Event
    form = EventAdminForm
    fields = ('title',
              'details',
              'created',
              'released',
              'event_date',
              )
    list_display = ('title',
                    'created',
                    'released',
                    'event_date',
                    )
    readonly_fields = ('created',
                       )

    def save_model(self, request, obj, form, change):
        if obj.created == None:
            obj.created = datetime.datetime.now()
        if obj.released == None:
            obj.released = False
        obj.save()


admin.site.register(models.Event, EventAdmin)

class GalleryAdmin(options.ModelAdmin):
    models = models.Gallery
    fields = ('title',
              'gallery_slug',
              'description',
              'date_modified',
              )
    list_display = ('title',
                    'date_modified',
                    )
    readonly_fields = ('gallery_slug',
                       'date_modified',
                       )
    
    def save_model(self, request, obj, form, change):
#         obj.gallery_slug = obj.title.strip().\
#             lower().\
#             replace(' ', '-')
#         # remove any !@#$, etc.
#         for p in string.punctuation:
#             if p != '-':
#                 obj.gallery_slug = obj.gallery_slug.replace(p, '')
#         obj.gallery_slug = obj.gallery_slug.rstrip('-')
        obj.gallery_slug = slugify(obj.title)
        
        obj.date_modified = datetime.datetime.now()
        
        obj.save()
        
admin.site.register(models.Gallery, GalleryAdmin)

class ImageAdmin(options.ModelAdmin):
    models = models.Image
    fields = ('gallery',
              'title',
              'image_slug',
              'image',              
              'description',
              'sort_weight',
              'date_added',
              )
    list_display = ('gallery',
                    'sort_weight',
                    'title',
                    'image_slug',
                    'date_added',
                    )
    readonly_fields = ('image_slug',
                       'date_added',
                       )
                
    def save_model(self, request, obj, form, change):
#         obj.image_slug = obj.title.strip().\
#             lower().\
#             replace(' ', '-')
#         # remove any !@#$, etc.
#         for p in string.punctuation:
#             if p != '-':
#                 obj.image_slug = obj.image_slug.replace(p, '')
#         obj.image_slug = obj.image_slug.rstrip('-')
        obj.image_slug = slugify(obj.title)
        
        obj.date_added = datetime.datetime.now()
        
        obj.save()
        
admin.site.register(models.Image, ImageAdmin)
