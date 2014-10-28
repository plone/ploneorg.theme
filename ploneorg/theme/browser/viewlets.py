from plone.app.layout.viewlets.common import PersonalBarViewlet
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from plone import api


class customPersonalBarViewlet(PersonalBarViewlet):
    """ Customization of the PersonalBarViewlet """

    index = ViewPageTemplateFile('templates/personal_bar.pt')

    def get_member_portrait(self):
        username = api.user.get_current()
        pm = api.portal.get_tool('portal_membership')

        return pm.getPersonalPortrait(username.id)

    def get_username(self):
        username = api.user.get_current()
        return username.id
