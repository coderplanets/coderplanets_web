import React from 'react'

import NotificationList from './NotificationList'
import SysNotifications from './SysNotifications'
import MentionList from './MentionList'

const MailLists = ({ activeRaw }) => {
  switch (activeRaw) {
    case 'notifications': {
      return <NotificationList data={[]} />
    }
    case 'sys_notifications': {
      return <SysNotifications data={[]} />
    }
    default:
      return <MentionList data={[]} />
  }
}

export default MailLists
