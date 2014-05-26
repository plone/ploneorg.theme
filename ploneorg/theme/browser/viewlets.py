from plone.app.layout.viewlets.common import PersonalBarViewlet
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

import plone.api


class customPersonalBarViewlet(PersonalBarViewlet):
    """ Customization of the PersonalBarViewlet """

    index = ViewPageTemplateFile('templates/personal_bar.pt')

    def get_member_portrait(self):
        username = plone.api.user.get_current()
        pm = plone.api.portal.get_tool('portal_membership')

        return pm.getPersonalPortrait(username.id)
