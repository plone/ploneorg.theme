from zope.interface import Interface
from plone.theme.interfaces import IDefaultPloneLayer


class ICustomTheme(Interface):
    """Marker interface that defines a Zope 3 browser layer.
    """


class IThemeSpecific(IDefaultPloneLayer):
    """Marker interface that defines a Zope 3 skin layer bound to a Skin
       Selection in portal_skins.
       If you need to register a viewlet only for the "YourSkin"
       skin, this is the interface that must be used for the layer attribute
       in YourSkin/browser/configure.zcml.
    """