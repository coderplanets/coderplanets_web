import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config/assets'

import { Wrapper, SeeAllMessages } from './styles/mails_panel'
import Selector from './Selector'
import MailLists from './MailLists'

import { selectChange, seeAll } from './logic'

const mailTabs = [
  {
    title: '提及',
    raw: 'mentions',
    count: 0,
    icon: `${ICON_CMD}/mail_mention.svg`,
  },
  {
    title: '关注',
    raw: 'notifications',
    count: 0,
    icon: `${ICON_CMD}/mail_watching.svg`,
  },
  {
    title: '消息',
    raw: 'sys_notifications',
    count: 0,
    icon: `${ICON_CMD}/mail_notification.svg`,
  },
]

const MailsPannel = ({ activeRaw, mailStatus, pagedMentions }) => {
  if (mailStatus.mentionCount !== 0) {
    const index = R.findIndex(R.propEq('raw', 'mentions'), mailTabs)
    mailTabs[index].count = mailStatus.mentionCount
  }
  if (mailStatus.notificationCount !== 0) {
    const index = R.findIndex(R.propEq('raw', 'sys_notifications'), mailTabs)
    mailTabs[index].count = mailStatus.notificationCount
  }

  return (
    <Wrapper>
      <Selector
        source={mailTabs}
        activeRaw={activeRaw}
        onChange={selectChange}
      />
      <MailLists activeRaw={activeRaw} pagedMentions={pagedMentions} />
      <SeeAllMessages onClick={seeAll}>查看全部消息</SeeAllMessages>
    </Wrapper>
  )
}

export default MailsPannel
