/*
 *
 * MailBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import { Popover } from '../../components'
import Selector from './Selector'
import MailLists from './MailLists'

import { ICON_ASSETS } from '../../config/assets'
import { Wrapper, PannerWrapper, Icon } from './styles'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:MailBox')
/* eslint-enable no-unused-vars */

const fakeOpts = [
  {
    title: '关注',
    raw: 'notifications',
    icon: `${ICON_ASSETS}/cmd/mail_watching.svg`,
  },
  {
    title: '提及',
    raw: 'mentions',
    icon: `${ICON_ASSETS}/cmd/mail_mention.svg`,
  },
  {
    title: '消息',
    raw: 'sys_notifications',
    icon: `${ICON_ASSETS}/cmd/mail_notification.svg`,
  },
]

const MailsPannel = ({ activeRaw }) => {
  return (
    <PannerWrapper>
      <Selector
        source={fakeOpts}
        activeRaw={activeRaw}
        onChange={logic.selectChange}
      />
      <MailLists activeRaw={activeRaw} />
    </PannerWrapper>
  )
}

class MailBoxContainer extends React.Component {
  state = { visible: false }

  componentWillMount() {
    const { mailBox } = this.props
    logic.init(mailBox)
  }

  onVisibleChange(visible) {
    if (visible) {
      debug('load if need')
    }
    this.setState({ visible })
  }

  render() {
    const { mailBox } = this.props

    const { activeRaw } = mailBox
    const { visible } = this.state
    return (
      <Popover
        content={<MailsPannel activeRaw={activeRaw} />}
        placement="bottomLeft"
        trigger="click"
        visible={visible}
        onVisibleChange={this.onVisibleChange.bind(this)}
      >
        <Wrapper>
          <Icon src={`${ICON_ASSETS}/cmd/header_mail.svg`} />
        </Wrapper>
      </Popover>
    )
  }
}

export default inject(storePlug('mailBox'))(observer(MailBoxContainer))
