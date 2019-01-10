/*
 *
 * MailsViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config/assets'

import TabSelector from '../../components/TabSelector'
import MailLists from './MailLists'
import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:MailsViewer')

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

class MailsViewerContainer extends React.Component {
  componentDidMount() {
    const { mailsViewer } = this.props
    logic.init(mailsViewer)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { mailsViewer } = this.props
    const { activeRaw, pagedMentionsData, readState } = mailsViewer

    return (
      <Wrapper>
        <TabSelector
          source={mailTabs}
          activeRaw={activeRaw}
          onChange={logic.selectChange}
        />

        <MailLists
          activeRaw={activeRaw}
          pagedMentions={pagedMentionsData}
          readState={readState}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('mailsViewer'))(observer(MailsViewerContainer))
