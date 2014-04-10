
from artsite.settings.production_settings import *

# use override for development testing only
try:
    from artsite.settings.override_settings import *
except ImportError:
    pass
