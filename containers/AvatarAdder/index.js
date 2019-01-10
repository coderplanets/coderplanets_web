/*
 *
 * AvatarAdder
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import Popover from '../../components/Popover'

import { Wrapper, AddText } from './styles'
import AdderPanel from './AdderPanel'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:AvatarAdder')

class AvatarAdderContainer extends React.Component {
  constructor(props) {
    super(props)

    const { avatarAdder } = props
    logic.init(avatarAdder)
  }

  onConfirm(user) {
    const { onConfirm } = this.props
    logic.onConfirm()
    onConfirm(user)
  }

  render() {
    const { avatarAdder } = this.props
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
            onConfirm={this.onConfirm.bind(this, githubUserData)}
          />
        }
        placement="bottom"
        trigger="click"
        onVisibleChange={logic.onPopoverVisible.bind(this)}
      >
        <Wrapper>
          <AddText>+</AddText>
        </Wrapper>
      </Popover>
    )
  }
}

AvatarAdderContainer.propTypes = {
  avatarAdder: PropTypes.object.isRequired,
  onConfirm: PropTypes.func,
}

AvatarAdderContainer.defaultProps = {
  onConfirm: debug,
}

export default inject(storePlug('avatarAdder'))(observer(AvatarAdderContainer))
