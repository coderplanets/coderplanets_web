/*
 *
 * AvatarAdder
 *
 */
import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Tooltip from '@/widgets/Tooltip'

import AdderPanel from './AdderPanel'

import { Wrapper, SettingIcon } from './styles'
import { useInit, adderOnConfirm, onPopoverVisible } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AvatarAdder')

const AvatarAdderContainer = ({ avatarAdder: store, onConfirm }) => {
  useInit(store)

  const { popoverVisible, githubUserData, searching, searchValue } = store

  return (
    <Tooltip
      visible={popoverVisible}
      hideOnClick={false}
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
        <SettingIcon src={`${ICON}/shape/settings.svg`} />
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

export default bond(AvatarAdderContainer, 'avatarAdder')
