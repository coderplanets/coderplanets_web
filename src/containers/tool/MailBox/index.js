/*
 *
 * MailBox
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import Tooltip from '@/widgets/Tooltip'

import MailsPanel from './MailsPanel'

import { Wrapper, NotifyDot, HeaderMailIcon } from './styles'
import { useInit, visibleOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:MailBox')

const MailBoxContainer = ({ mailBox: store }) => {
  useInit(store)

  const { activeRaw, mailStatusData, pagedMentionsData } = store

  return (
    <Tooltip
      content={
        <MailsPanel
          activeRaw={activeRaw}
          mailStatus={mailStatusData}
          pagedMentions={pagedMentionsData}
        />
      }
      hideOnClick={false}
      placement="bottom-start"
      trigger="click"
      onShow={visibleOnChange}
    >
      <Wrapper testid="account-mailbox">
        <NotifyDot active={mailStatusData.hasMail} />
        <HeaderMailIcon />
      </Wrapper>
    </Tooltip>
  )
}

export default bond(MailBoxContainer, 'mailBox')
