/*
 *
 * BuyMeChuanChuan
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { ICON_CMD, GITHUB_CPS_TEAM } from '@/config'
import { buildLog } from '@/utils'

import Modal from '@/components/Modal'
import UserCell from '@/components/UserCell'

import UnLoginNote from './UnloginNote'
import ChuanSelector from './ChuanSelector'
import PaymentFooter from './PaymentFooter'

import {
  Wrapper,
  Header,
  BuyChuanChuan,
  ChuanChuanDesc,
  FoodPic,
  ChuanChuanSelect,
  SelectTitle,
  TeamName,
  NameLinkIcon,
  SelectDesc,
  SelectHolder,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Footer:index')

const BuyMeChuanChuan = ({ show, accountInfo, onClose, onLogin, onPay }) => {
  const [activeChuan, setActiveChuan] = useState(1)

  return (
    <Modal width="700px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper>
        <Header>
          {accountInfo.isLogin ? (
            <UserCell user={accountInfo} />
          ) : (
            <UnLoginNote onLogin={onLogin} />
          )}
        </Header>
        <BuyChuanChuan>
          <ChuanChuanDesc>
            <FoodPic src={`${ICON_CMD}/food.png`} />
          </ChuanChuanDesc>
          <ChuanChuanSelect>
            <SelectTitle>
              请{' '}
              <TeamName
                href={GITHUB_CPS_TEAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                开发者们
                <NameLinkIcon src={`${ICON_CMD}/link2.svg`} />
              </TeamName>{' '}
              撸个串
            </SelectTitle>

            <SelectDesc>
              你的资助将主要用于 coderplanets
              网站的开发和维护，使之更加稳定可靠。开源项目的巨大时间和物质成本无法仅靠情怀支撑，望理解。
            </SelectDesc>

            <ChuanSelector active={activeChuan} onSelect={setActiveChuan} />
            <SelectHolder />

            <PaymentFooter num={activeChuan} onPay={onPay} />
          </ChuanChuanSelect>
        </BuyChuanChuan>
      </Wrapper>
    </Modal>
  )
}

BuyMeChuanChuan.propTypes = {
  // https://www.npmjs.com/package/prop-types
  accountInfo: T.shape({
    id: T.string,
    avatar: T.string,
    nickname: T.string,
    isLogin: T.bool,
  }),
  show: T.bool,
  onClose: T.func,
  onLogin: T.func,
  onPay: T.func,
}

BuyMeChuanChuan.defaultProps = {
  accountInfo: {},
  show: false,
  onClose: log,
  onLogin: log,
  onPay: log,
}

export default React.memo(BuyMeChuanChuan)
