/*
 *
 * AvatarAdder
 *
 */
import React from 'react'
import PropTypes from 'prop-types'

import Popover from '@components/Popover'

import { connectStore, makeDebugger } from '@utils'
import AdderPanel from './AdderPanel'

import { Wrapper, AddText } from './styles'
import { useInit, adderOnConfirm, onPopoverVisible } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:AvatarAdder')

const AvatarAdderContainer = ({ avatarAdder, onConfirm }) => {
  useInit(avatarAdder)

  const {
    popoverVisiable,
    githubUserData,
    searching,
    searchValue,
  } = avatarAdder

  return (
    <Popover
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
    </Popover>
  )
}

AvatarAdderContainer.propTypes = {
  avatarAdder: PropTypes.object.isRequired,
  onConfirm: PropTypes.func,
}

AvatarAdderContainer.defaultProps = {
  onConfirm: debug,
}

export default connectStore(AvatarAdderContainer)
