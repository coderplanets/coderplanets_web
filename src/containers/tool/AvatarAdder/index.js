/*
 *
 * AvatarAdder
 *
 */
import React from 'react'
import T from 'prop-types'

import Tooltip from '@/components/Tooltip'

import { pluggedIn, buildLog } from '@/utils'
import AdderPanel from './AdderPanel'

import { Wrapper, AddText } from './styles'
import { useInit, adderOnConfirm, onPopoverVisible } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AvatarAdder')

const AvatarAdderContainer = ({ avatarAdder: store, onConfirm }) => {
  useInit(store)

  const { popoverVisible, githubUserData, searching, searchValue } = store

  return (
    <Tooltip
      visible={popoverVisible}
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

export default pluggedIn(AvatarAdderContainer)
