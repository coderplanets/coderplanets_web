/*
 *
 * MailBox
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Popover from '../../components/Popover'
import MailsPanel from './MailsPanel'

import { Wrapper, NofityDot, HeaderMailIcon } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:MailBox')

class MailBoxContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  componentDidMount() {
    const { mailBox } = this.props
    logic.init(mailBox)
  }

  componentWillUnmount() {
    logic.uninit()
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
