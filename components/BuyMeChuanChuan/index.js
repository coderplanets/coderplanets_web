/*
 *
 * BuyMeChuanChuan
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Modal, Button, Icon, UserCell } from '../../components'

import { makeDebugger } from '../../utils'
import { ICON_ASSETS, GITHUB_ME } from '../../config'

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

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Footer:index')
/* eslint-enable no-unused-vars */

const PayMoneyFooter = ({ num }) => {
  return (
    <PayButton>
      <PayDesc>
        支持:<AliPay>
          <Icon type="alipay-circle" />支付宝
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
}

const ChuanSelector = ({ active, onSelect }) => {
  return (
    <SelectBox>
      <ChuanChuanIcon src={`${ICON_ASSETS}/cmd/chuanchuan.svg`} />

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
}

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
    return (
      <Modal width="700px" show={show} showCloseBtn onClose={onClose}>
        <Wrapper>
          <Header>
            {R.isEmpty(fromUser) ? <div /> : <UserCell user={fromUser} />}
          </Header>
          <BuyChuanChuan>
            <ChuanChuanDesc>
              <FoodPic src={`${ICON_ASSETS}/cmd/food.png`} />
            </ChuanChuanDesc>
            <ChuanChuanSelect>
              <SelectTitle>
                请{' '}
                <MyName>
                  开发者
                  <a href={GITHUB_ME} target="_blank" rel="noopener noreferrer">
                    <NameLinkIcon src={`${ICON_ASSETS}/cmd/link2.svg`} />
                  </a>
                </MyName>{' '}
                撸个串
              </SelectTitle>

              <SelectDesc>
                你的资助将主要用于 coderplanets 网站的运维费用,
                与此同时，你将解锁所有精心设计的主题。
              </SelectDesc>

              <ChuanSelector
                active={this.state.activeChuan}
                onSelect={this.onChuanSelect.bind(this)}
              />
              <SelectHolder />

              <PayMoneyFooter num={this.state.activeChuan} />
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
