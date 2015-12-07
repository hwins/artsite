from os.path import basename, splitext

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
    
class Gallery(models.Model):
    title = models.CharField(max_length=100)
    gallery_slug = models.SlugField(max_length=40, unique=True)
    description = HTMLField()
    date_modified = models.DateTimeField(blank=True,
                                      null=True,
                                      )
    
    class Meta:
        ordering = ['title']
        verbose_name_plural = 'Galleries'

    def __str__(self):
        return self.title

class Image(models.Model):
    gallery = models.ForeignKey(Gallery)
    title = models.CharField(max_length=100)
    image_slug = models.SlugField(max_length=40,
                                  unique=True,
                                  )
    image = models.ImageField(upload_to='files/gallery_images/')
    description = HTMLField()
    sort_weight = models.IntegerField()
    date_added = models.DateTimeField(blank=True,
                                      null=True,
                                      )
     
    
    class Meta:
        ordering = ['gallery', 'sort_weight']
        
    def image_url(self):
        return '/media/%s' % str(self.image)
  
    def __str__(self):
        return self.title
