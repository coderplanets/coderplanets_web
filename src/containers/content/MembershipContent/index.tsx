/* eslint-disable jsx-a11y/accessible-emoji */
/*
 *
 * MembershipContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import OrButton from '@/widgets/Buttons/OrButton'
// import Button from '@/widgets/Buttons/Button'
import Checker from '@/widgets/Checker'
import NoticeBar from '@/widgets/NoticeBar'

import type { TStore } from './store'
import { PAY, PACKAGE } from './constant'

import Illustrations from './Illustrations'
import Support from './Support'
import PriceTag from './PriceTag'
import MonthlyWarning from './MonthlyWarning'
import QA from './QA'
import InviteBox from './InviteBox'

import {
  Wrapper,
  InnerWrapper,
  BannerWrapper,
  PayButtonWrapper,
  InviteCodeWrapper,
  Title,
  Desc,
  ContentWrapper,
  Dashboard,
  CheckerWrapper,
  TypeDesc,
  TitleDivider,
  ItemsWrapper,
  PayBtnWrapper,
  FreeNote,
} from './styles'

// import { useInit, onUpgrade } from './logic'
import {
  useInit,
  pkgTypeOnChange,
  payTypeOnChange,
  openInviteBox,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:MembershipContent')

// const PayButton = ({ pkgType, payType }) => {
//   if (pkgType === PACKAGE.GIRL) {
//     return (
//       <Button type="primary" ghost>
//         验证
//       </Button>
//     )
//   }

//   return (
//     <Button type="primary" ghost>
//       {payType === PAY.YEARLY ? '扫码' : '试试看'}
//     </Button>
//   )
// }

type TProps = {
  membershipContent?: TStore
  metric?: TMetric
  testid?: string
}

const MembershipContentContainer: FC<TProps> = ({
  membershipContent: store,
  testid = 'membership-content',
  metric,
}) => {
  useInit(store)

  const { payType, pkgType, dashboardItems, showInviteBox } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <BannerWrapper>
          <Title>Hi，你好哇 👋</Title>
          <Desc>欢迎来到 CoderPlanets，会员系统暂未开放，仅做展示。</Desc>
          <PayButtonWrapper>
            <OrButton
              size="small"
              activeKey={payType}
              group={[
                {
                  key: PAY.YEARLY,
                  title: '年付费',
                },
                {
                  key: PAY.MONTHLY,
                  title: '月付费',
                },
              ]}
              onClick={payTypeOnChange}
            />
            {payType === PAY.MONTHLY &&
              pkgType !== PACKAGE.GIRL &&
              pkgType !== PACKAGE.FREE && <MonthlyWarning />}
          </PayButtonWrapper>
          <InviteCodeWrapper onClick={() => openInviteBox()}>
            使用朋友码
          </InviteCodeWrapper>
          <InviteBox show={showInviteBox} />
        </BannerWrapper>
        <ContentWrapper metric={metric}>
          {dashboardItems.map((item) => (
            <Dashboard
              key={item.pkgType}
              onClick={() => pkgTypeOnChange(item.pkgType)}
              active={pkgType === item.pkgType}
            >
              <CheckerWrapper>
                <Checker checked={pkgType === item.pkgType} hiddenMode />
              </CheckerWrapper>
              <Illustrations
                type={item.illustration}
                active={pkgType === item.pkgType}
              />
              <PriceTag
                active={pkgType === item.pkgType}
                price={
                  payType === PAY.YEARLY ? item.yearlyPrice : item.monthlyPrice
                }
                unit={payType}
              />
              <TypeDesc>{item.desc}</TypeDesc>
              <TitleDivider />
              <ItemsWrapper>
                <Support
                  active={pkgType === item.pkgType}
                  items={item.serviceItems}
                  pkgType={item.pkgType}
                />
              </ItemsWrapper>
              <TitleDivider />
              <PayBtnWrapper active={pkgType === item.pkgType}>
                {item.pkgType === PACKAGE.FREE ? (
                  <FreeNote>当前为免费账户无需支付</FreeNote>
                ) : (
                  <NoticeBar
                    type="info"
                    content="内测阶段开放"
                    right={10}
                    noBg
                  />
                  // <PayButton pkgType={item.pkgType} payType={payType} />
                )}
              </PayBtnWrapper>
            </Dashboard>
          ))}
        </ContentWrapper>
        <QA />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(MembershipContentContainer) as FC<TProps>
