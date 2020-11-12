/*
 *
 * UpgradeContent
 *
 */

import React from 'react'
import T from 'prop-types'

// import { ICON_CMD, EMAIL_BUSINESS, SENIOR_AMOUNT_THRESHOLD } from '@/config'
import { connectStore, buildLog } from '@/utils'

import { OrButton, Button } from '@/components/Buttons'

import Illustrations from './Illustrations'

import Support from './Support'
import PriceTag from './PriceTag'
import MonthlyWarning from './MonthlyWarning'

import {
  Wrapper,
  InnerWrapper,
  BannerWrapper,
  PayButtonWrapper,
  Title,
  Desc,
  // LabelWrapper,
  ContentWrapper,
  Dashboard,
  TypeDesc,
  TitleDivider,
  ItemsWrapper,
  PayBtnWrapper,
  FreeNote,
  //
  Footer,
} from './styles'

// import { useInit, onUpgrade } from './logic'
import { useInit, pkgTypeOnChange, payTypeOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UpgradeContent')

const PayButton = ({ pkgType, payType }) => {
  if (pkgType === 'girl') {
    return (
      <Button type="primary" ghost>
        验证
      </Button>
    )
  }

  return (
    <Button type="primary" ghost>
      {payType === 'yearly' ? '扫码' : '试试看'}
    </Button>
  )
}

const UpgradeContentContainer = ({ upgradeContent: store, testId, metric }) => {
  useInit(store)

  const { payType, pkgType, dashboardItems } = store

  return (
    <Wrapper testId={testId}>
      <InnerWrapper metric={metric}>
        <BannerWrapper>
          <Title>Hi, mydearxym</Title>
          <Desc>欢迎来到 CoderPlanets，选择一个适合你的会员类型吧</Desc>
          <PayButtonWrapper>
            <OrButton
              size="small"
              type="primary"
              activeKey={payType}
              group={[
                {
                  key: 'yearly',
                  title: '年付费',
                },
                {
                  key: 'monthly',
                  title: '月付费',
                },
              ]}
              onClick={payTypeOnChange}
            />
            {payType === 'monthly' &&
              pkgType !== 'girl' &&
              pkgType !== 'free' && <MonthlyWarning />}
          </PayButtonWrapper>
        </BannerWrapper>
        <ContentWrapper metric={metric}>
          {dashboardItems.map((item) => (
            <Dashboard
              key={item.pkgType}
              onClick={() => pkgTypeOnChange(item.pkgType)}
              active={pkgType === item.pkgType}
            >
              <Illustrations
                type={item.illustration}
                active={pkgType === item.pkgType}
              />
              <PriceTag
                active={pkgType === item.pkgType}
                price={
                  payType === 'yearly' ? item.yearlyPrice : item.monthlyPrice
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
                {item.pkgType === 'free' ? (
                  <FreeNote>当前为免费账户无需支付</FreeNote>
                ) : (
                  <PayButton pkgType={item.pkgType} payType={payType} />
                )}
              </PayBtnWrapper>
            </Dashboard>
          ))}
        </ContentWrapper>
        <Footer>wip 标签表示正在开发中的功能，不会重复收费</Footer>
      </InnerWrapper>
    </Wrapper>
  )
}

UpgradeContentContainer.propTypes = {
  upgradeContent: T.any.isRequired,
  metric: T.string.isRequired,
  testId: T.string,
}

UpgradeContentContainer.defaultProps = {
  testId: 'upgrade-content',
}

export default connectStore(UpgradeContentContainer)
