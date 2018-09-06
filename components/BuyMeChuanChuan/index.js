/*
 *
 * BuyMeChuanChuan
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD, GITHUB_ME } from '../../config'

import { Modal, Button, Icon, UserCell, Maybe } from '..'

// import { inject, observer } from 'mobx-react'
// import Link from 'next/link'
// import styled from 'styled-components'
import {
  Wrapper,
  Header,
  BuyChuanChuan,
  ChuanChuanDesc,
  FoodPic,
  ChuanChuanSelect,
  SelectTitle,
  MyName,
  NameLinkIcon,
  SelectBox,
  SelectDesc,
  ChuanChuanIcon,
  Selectors,
  By,
  Circle,
  SelectHolder,
  PayButton,
  PayDesc,
  AliPay,
  Weixin,
  MoneyNum,
} from './styles'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Footer:index')
/* eslint-enable no-unused-vars */

const PayMoneyFooter = ({ num }) => (
  <PayButton>
    <PayDesc>
      支持:
      <AliPay>
        <Icon type="alipay-circle" />
        支付宝
      </AliPay>
      |
      <Weixin>
        <Icon type="wechat" /> 微信支付
      </Weixin>
    </PayDesc>
    <Button type="red">
      资助 <MoneyNum>￥{num * 10.24} 元</MoneyNum>
    </Button>
  </PayButton>
)

const ChuanSelector = ({ active, onSelect }) => (
  <SelectBox>
    <ChuanChuanIcon src={`${ICON_CMD}/chuanchuan.svg`} />

    <Selectors>
      <By>X</By>
      <Circle active={active === 1} onClick={onSelect.bind(this, 1)}>
        1
      </Circle>
      <Circle active={active === 2} onClick={onSelect.bind(this, 2)}>
        2
      </Circle>
      <Circle active={active === 3} onClick={onSelect.bind(this, 3)}>
        3
      </Circle>
      <Circle active={active === 5} onClick={onSelect.bind(this, 5)}>
        5
      </Circle>
      <Circle active={active === 10} onClick={onSelect.bind(this, 10)}>
        10
      </Circle>
    </Selectors>
  </SelectBox>
)

class BuyMeChuanChuan extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    activeChuan: 1,
  }

  onChuanSelect(activeChuan) {
    this.setState({
      activeChuan,
    })
  }

  render() {
    const { show, fromUser, onClose } = this.props
    const { activeChuan } = this.state
    return (
      <Modal width="700px" show={show} showCloseBtn onClose={onClose}>
        <Wrapper>
          <Header>
            <Maybe data={fromUser}>
              <UserCell user={fromUser} />
            </Maybe>
          </Header>
          <BuyChuanChuan>
            <ChuanChuanDesc>
              <FoodPic src={`${ICON_CMD}/food.png`} />
            </ChuanChuanDesc>
            <ChuanChuanSelect>
              <SelectTitle>
                请{' '}
                <MyName>
                  开发者
                  <a href={GITHUB_ME} target="_blank" rel="noopener noreferrer">
                    <NameLinkIcon src={`${ICON_CMD}/link2.svg`} />
                  </a>
                </MyName>{' '}
                撸个串
              </SelectTitle>

              <SelectDesc>
                你的资助将主要用于 coderplanets 网站的运维费用,
                与此同时，你将解锁所有精心设计的主题。
              </SelectDesc>

              <ChuanSelector
                active={activeChuan}
                onSelect={this.onChuanSelect.bind(this)}
              />
              <SelectHolder />

              <PayMoneyFooter num={activeChuan} />
            </ChuanChuanSelect>
          </BuyChuanChuan>
        </Wrapper>
      </Modal>
    )
  }
}

export default BuyMeChuanChuan

BuyMeChuanChuan.propTypes = {
  // https://www.npmjs.com/package/prop-types
  fromUser: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    nickname: PropTypes.string,
  }),
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

BuyMeChuanChuan.defaultProps = {
  fromUser: {},
  show: false,
  onClose: debug,
}
