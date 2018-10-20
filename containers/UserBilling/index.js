/*
 *
 * UserBilling
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'

import { SectionLabel } from '../../components'
import { Wrapper } from './styles'
import UpgradeMenu from './UpgradeMenu'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserBilling')
/* eslint-enable no-unused-vars */

class UserBillingContainer extends React.Component {
  componentDidMount() {
    const { userBilling } = this.props
    logic.init(userBilling)
  }

  render() {
    return (
      <Wrapper>
        <UpgradeMenu />
        <br />
        <SectionLabel
          title="历史账单"
          iconSrc={`${ICON_CMD}/bill_history.svg`}
          desc="没有查询到付费记录, 欢迎升级体验。"
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('userBilling'))(observer(UserBillingContainer))
