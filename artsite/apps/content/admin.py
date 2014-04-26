import datetime

from django.contrib import admin
from django.contrib.flatpages.admin import FlatpageForm, FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from tinymce.widgets import TinyMCE

from django import forms
from django.contrib.admin import options, widgets
from artsite.apps.content import models


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
