/*
 *
 * UserBilling
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import SectionLabel from '@/components/SectionLabel'
import UpgradeMenu from './UpgradeMenu'
import BillsTable from './BillsTable'
import TableSectionDesc from './TableSectionDesc'

import { Wrapper, ErrText } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserBilling')

const UserBillingContainer = ({ userBilling: store }) => {
  useInit(store)

  const { pagedBillRecordsData, accountInfo, isSelfViewing } = store
  // log('accountInfo: ', accountInfo.achievement)
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

export default connectStore(UserBillingContainer)
