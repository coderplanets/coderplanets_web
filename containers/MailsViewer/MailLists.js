import React from 'react'

import NotificationList from './NotificationList'
import SysNotifications from './SysNotificationList'
import MentionList from './MentionList'

const MailLists = ({ activeRaw, pagedMentions }) => {
  switch (activeRaw) {
    case 'notifications': {
      return <NotificationList data={[]} />
    }
    case 'sys_notifications': {
      return <SysNotifications data={[]} />
    }
    default:
      return <MentionList data={pagedMentions} />
  }
}

export default MailLists
