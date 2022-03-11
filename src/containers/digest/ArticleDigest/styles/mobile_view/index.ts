import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-start')};
  width: 100%;
  position: relative;
  padding: 30px 22px;
  padding-bottom: 20px;
  min-height: 150px;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: #0b4252;
  padding-bottom: 15px;
`
export const BannerContent = styled.div`
  ${css.flex()};
  height: 100%;
  width: 100%;
`
export const Avatar = styled.img`
  ${css.circle(25)};
  margin-right: 5px;
`
