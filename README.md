artsite
=======

This is a django based I wrote to display creative work

http://art.howardwinston.com

Additional documentation to be placed in the "docs" directory.

Requires
--------

See docs/requirements.txt

Update Notes
------------

For the sake of anyone who may want to make any use of this code:

I dropped my use of django-photologue in favor of a home grown image solution 
due to problems I had upgrading. For my purposes photologue was more than I 
needed anyway.

The version of django-tinymce that I was using was giving me problems with 
spell check, I think related to Python3. For the time being I copied version 
2.0.6 in and made hack change in the view.py. See comments in code. 

In an effort to reduce potential non-approved login attempts the path is now restricted 
via the web server. The low level domain name must be used to gain entrance to the 
the login page. See the settings module allowed hosts. Needless to say this is gitignored. 
(new word "gitignored"?) This along with other secret stuff is in the control folder. 
See settings folder.
 
    