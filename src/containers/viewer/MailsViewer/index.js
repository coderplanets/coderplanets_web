/*
 *
 * MailsViewer
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import TabSelector from '@/components/TabSelector'
import MailLists from './MailLists'

import { Wrapper } from './styles'
import { useInit, selectChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:MailsViewer')

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

const MailsViewerContainer = ({ mailsViewer: store }) => {
  useInit(store)

  const { activeRaw, pagedMentionsData, readState } = store

  return (
    <Wrapper>
      <TabSelector
        source={mailTabs}
        activeRaw={activeRaw}
        onChange={selectChange}
      />

      <MailLists
        activeRaw={activeRaw}
        pagedMentions={pagedMentionsData}
        readState={readState}
      />
    </Wrapper>
  )
}

export default connectStore(MailsViewerContainer)
