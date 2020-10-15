import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

// background: #f9fcfc;
export const Wrapper = styled.div`
  ${css.flexColumn()};

  height: 100%;
  min-height: 400px;
  width: 100%;
  padding: 15px 20px;
`

export const Header = styled.div`
  height: 35px;
  text-align: center;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const BuyChuanChuan = styled.div`
  ${css.flex()};
`
export const ChuanChuanDesc = styled.div`
  width: 50%;
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
  ${css.flexColumn()};
  width: 50%;
`
export const SelectTitle = styled.div`
  ${css.flex()};
  margin-left: 5px;
  color: ${theme('banner.desc')};
  font-size: 1.2rem;
`
export const TeamName = styled.a`
  ${css.flex()};
  transition: color 0.3s;
  color: ${theme('banner.title')};
  margin-left: 6px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
  }
`
export const NameLinkIcon = styled(Img)`
  fill: ${theme('banner.title')};
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

export const SelectHolder = styled.div`
  flex-grow: 1;
`
