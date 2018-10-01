/*
 *
 * AvatarAdder
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Popover } from '../../components'

import { Wrapper, AddText } from './styles'

import AdderPanel from './AdderPanel'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AvatarAdder')
/* eslint-enable no-unused-vars */

class AvatarAdderContainer extends React.Component {
  componentWillMount() {
    const { avatarAdder } = this.props
    logic.init(avatarAdder)
  }

  render() {
    const { avatarAdder } = this.props
    const { githubUserData, searching, searchValue } = avatarAdder

    return (
      <Popover
        content={
          <AdderPanel
            user={githubUserData}
            searchValue={searchValue}
            searching={searching}
          />
        }
        placement="bottom"
        trigger="click"
      >
        <Wrapper>
          <AddText>+</AddText>
        </Wrapper>
      </Popover>
    )
  }
}

export default inject(storePlug('avatarAdder'))(observer(AvatarAdderContainer))
