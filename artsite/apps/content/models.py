from django.db import models
from tinymce.models import HTMLField


class Event(models.Model):
    title = models.CharField(max_length=100)
    details = HTMLField()
    created = models.DateTimeField()
    released = models.BooleanField(default=False)
    event_date = models.DateTimeField(blank=True,
                                      null=True,
                                      )

    class Meta:
        ordering = ['-event_date']

    def __str__(self):
        return self.title
