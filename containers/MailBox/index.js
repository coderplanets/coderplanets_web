/*
 *
 * MailBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Popover } from '../../components'
import MailsPanel from './MailsPanel'

import { Wrapper, NofityDot, HeaderMailIcon } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:MailBox')
/* eslint-enable no-unused-vars */

class MailBoxContainer extends React.Component {
  constructor(props) {
    super(props)

    const { mailBox } = props
    logic.init(mailBox)

    this.state = { visible: false }
  }

  onVisibleChange(visible) {
    if (visible) {
      logic.loadMentions()
    }
    this.setState({ visible })
    // logic.panelVisiableOnChange(visible)
  }

  render() {
    const { mailBox } = this.props

    const {
      activeRaw,
      mailStatusData,
      pagedMentionsData,
      // panelVisiable,
    } = mailBox
    const { visible } = this.state
    // const visible = true
    // debug('pagedMentionsData --> ', pagedMentionsData)

    return (
      <Popover
        content={
          <MailsPanel
            activeRaw={activeRaw}
            mailStatus={mailStatusData}
            pagedMentions={pagedMentionsData}
          />
        }
        placement="bottomLeft"
        trigger="click"
        visible={visible}
        onVisibleChange={this.onVisibleChange.bind(this)}
      >
        <Wrapper>
          <NofityDot active={mailStatusData.hasMail} />
          <HeaderMailIcon />
        </Wrapper>
      </Popover>
    )
  }
}

export default inject(storePlug('mailBox'))(observer(MailBoxContainer))
