/*
 *
 * MailsViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ICON_CMD } from '../../config/assets'

import TabSelector from '../../components/TabSelector'
import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:MailsViewer')
/* eslint-enable no-unused-vars */

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
  constructor(props) {
    super(props)
    const { mailsViewer } = this.props
    logic.init(mailsViewer)
  }

  render() {
    return (
      <Wrapper>
        <TabSelector
          source={mailTabs}
          activeRaw={'mentions'}
          onChange={debug}
        />
        <h2>MailsViewer container!</h2>
        <div>impress me!</div>
      </Wrapper>
    )
  }
}

export default inject(storePlug('mailsViewer'))(observer(MailsViewerContainer))
