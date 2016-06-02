import ipywidgets as widgets
from traitlets import Unicode

class biojsWidget(widgets.DOMWidget):
    _view_name = Unicode('biojsView', sync=True)
    _view_module = Unicode('nbextensions/biojs_widget', sync=True)
