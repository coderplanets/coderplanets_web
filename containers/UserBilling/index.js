/*
 *
 * UserBilling
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import SectionLabel from '@components/SectionLabel'
import { ICON_CMD } from '@config'

import { makeDebugger, storePlug } from '@utils'
import UpgradeMenu from './UpgradeMenu'
import BillsTable from './BillsTable'
import TableSectionDesc from './TableSectionDesc'

import { Wrapper, ErrText } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserBilling')

class UserBillingContainer extends React.Component {
  componentDidMount() {
    const { userBilling } = this.props
    logic.init(userBilling)
  }

  render() {
    const { userBilling } = this.props
    const { pagedBillRecordsData, accountInfo, isSelfViewing } = userBilling
    // debug('accountInfo: ', accountInfo.achievement)
    return (
      <Wrapper>
        {isSelfViewing ? (
          <React.Fragment>
            <UpgradeMenu achievement={accountInfo.achievement} />
            <br />
            <SectionLabel
              title="历史账单"
              iconSrc={`${ICON_CMD}/bill_history.svg`}
              node={<TableSectionDesc data={pagedBillRecordsData} />}
            />
            <BillsTable data={pagedBillRecordsData} />
          </React.Fragment>
        ) : (
          <ErrText>请登录后查看本人的账单信息</ErrText>
        )}
      </Wrapper>
    )
  }
}

export default inject(storePlug('userBilling'))(observer(UserBillingContainer))
