/*
 *
 * MailBox
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'
import Popover from '@components/Popover'

import MailsPanel from './MailsPanel'

import { Wrapper, NofityDot, HeaderMailIcon } from './styles'
import { useInit, visibleOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:MailBox')

const MailBoxContainer = ({ mailBox }) => {
  useInit(mailBox)

  const { visible, activeRaw, mailStatusData, pagedMentionsData } = mailBox

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
      onVisibleChange={visibleOnChange}
    >
      <Wrapper testid="account-mailbox">
        <NofityDot active={mailStatusData.hasMail} />
        <HeaderMailIcon />
      </Wrapper>
    </Popover>
  )
}

export default connectStore(MailBoxContainer)
