import styled from 'styled-components'

import { Img } from '../..'
import { Animate, theme } from '../../../utils'

// background: #f9fcfc;
export const Wrapper = styled.div`
  height: 100%;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`

export const Header = styled.div`
  height: 35px;
  text-align: center;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const BuyChuanChuan = styled.div`
  display: flex;
`
export const ChuanChuanDesc = styled.div`
  width: 50%;
  justify-content: center;
`

// source: https://unsplash.com/photos/vzX2rgUbQXM
export const FoodPic = styled.img`
  width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
`
export const ChuanChuanSelect = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const SelectTitle = styled.div`
  display: flex;
  margin-left: 5px;
  color: ${theme('banner.desc')};
  font-size: 1.3rem;
`
export const MyName = styled.div`
  color: ${theme('link')};
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
`
export const NameLinkIcon = styled(Img)`
  fill: ${theme('link')};
  width: 20px;
  height: 20px;
  padding-top: 3px;
`

export const SelectDesc = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 0.9rem;
  margin-bottom: 12px;
  color: ${theme('banner.desc')};
`
export const SelectBox = styled.div`
  margin-top: 10px;
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-radius: 4px;
  background: ${theme('modal.innerSelectBg')};
  height: 90px;
  display: flex;
  justify-content: left;
  align-items: center;

  background-image: linear-gradient(#51abb2 2px, transparent 2px),
    linear-gradient(90deg, #51abb200 2px, transparent 2px),
    linear-gradient(#5eabb333 1px, transparent 1px),
    linear-gradient(90deg, #5eabb336 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`

export const ChuanChuanIcon = styled(Img)`
  width: 55px;
  height: 55px;
`

export const Selectors = styled.div`
  display: flex;
`
export const By = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: ${theme('font')};
  margin-left: -10px;
`

export const Circle = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid;
  border-color: ${theme('font')};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => (props.active ? 'white' : '#51abb2')};
  background-color: ${props => (props.active ? theme('font') : '')};
  &:hover {
    cursor: pointer;
    animation: ${Animate.pulse} 0.3s linear;
  }
  transition: background-color 0.3s ease-out;
`

export const SelectHolder = styled.div`
  flex-grow: 1;
`

export const PayButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
  align-items: center;
`

export const PayDesc = styled.div`
  font-size: 0.8rem;
  display: flex;
  color: ${theme('banner.desc')};
`
export const AliPay = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: #42abe1;
`
export const Weixin = styled.div`
  color: #3eb64b;
  margin-left: 5px;
`

export const MoneyNum = styled.span`
  color: #ffdad3;
`
