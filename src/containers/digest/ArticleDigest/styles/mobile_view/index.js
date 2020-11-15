import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-center')};
  position: relative;
  padding: 30px 25px;
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
export const Title = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 10px;
`
export const BannerContent = styled.div`
  ${css.flex()};
  height: 100%;
  width: 100%;
`
export const Brief = styled.div`
  ${css.flexColumnGrow()};
  width: 100%%;
`
export const Avatar = styled.img`
  ${css.circle(25)};
  margin-right: 5px;
`
