from django.contrib import admin
from django.contrib.flatpages.admin import FlatpageForm, FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from tinymce.widgets import TinyMCE


class FlatpageFormWithTinyMCE(FlatpageForm):
    """Flat Page Form with TinyMCE
    This is to override the standard flatpage input with a WYSIWYG
    editor.
    """
    
    class Meta:
        model = FlatPage
        widgets = {
                   'content': TinyMCE(attrs={'cols': 120, 'rows': 60}),
                   }

class FlatpageAdminWithTinyMCE(FlatPageAdmin):
    """Flat Page Admin with TinyMCE
    """
    form = FlatpageFormWithTinyMCE


admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatpageAdminWithTinyMCE)


   

