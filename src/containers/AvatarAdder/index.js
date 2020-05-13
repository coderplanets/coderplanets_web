/*
 *
 * AvatarAdder
 *
 */
import React from 'react'
import T from 'prop-types'

import Tooltip from '@/components/Tooltip'

import { connectStore, buildLog } from '@/utils'
import AdderPanel from './AdderPanel'

import { Wrapper, AddText } from './styles'
import { useInit, adderOnConfirm, onPopoverVisible } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AvatarAdder')

const AvatarAdderContainer = ({ avatarAdder, onConfirm }) => {
  useInit(avatarAdder)

  const {
    popoverVisiable,
    githubUserData,
    searching,
    searchValue,
  } = avatarAdder

  return (
    <Tooltip
      visible={popoverVisiable}
      content={
        <AdderPanel
          user={githubUserData}
          searchValue={searchValue}
          searching={searching}
          onConfirm={adderOnConfirm(githubUserData, onConfirm)}
        />
      }
      placement="bottom"
      trigger="click"
      onVisibleChange={onPopoverVisible}
    >
      <Wrapper>
        <AddText>+</AddText>
      </Wrapper>
    </Tooltip>
  )
}

AvatarAdderContainer.propTypes = {
  avatarAdder: T.object.isRequired,
  onConfirm: T.func,
}

AvatarAdderContainer.defaultProps = {
  onConfirm: log,
}

export default connectStore(AvatarAdderContainer)
