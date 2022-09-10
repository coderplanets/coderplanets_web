/*
 *
 * BuyMeChuanChuan
 *
 */

import { FC, useState, memo } from 'react'

import { ICON_CMD, GITHUB } from '@/config'
import { buildLog } from '@/utils/logger'
import useAccount from '@/hooks/useAccount'

import Modal from '@/widgets/Modal'
import UserCell from '@/widgets/UserCell'

import UnLoginNote from './UnLoginNote'
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
const log = buildLog('w:Footer:index')

type TProps = {
  show?: boolean
  onClose?: () => void
  onLogin?: () => void
  onPay?: (m: number) => void
}

const BuyMeChuanChuan: FC<TProps> = ({
  show = false,
  onClose = log,
  onLogin = log,
  onPay = log,
}) => {
  const accountInfo = useAccount()
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
              <TeamName href={GITHUB} target="_blank" rel="noopener noreferrer">
                开发者们
                <NameLinkIcon src={`${ICON_CMD}/link2.svg`} />
              </TeamName>{' '}
              撸个串
            </SelectTitle>

            <SelectDesc>
              你的远程投喂将有助于开发团队在饱腹状态下工作， 冲!
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

export default memo(BuyMeChuanChuan)
