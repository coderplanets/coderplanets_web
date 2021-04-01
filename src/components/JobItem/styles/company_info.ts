import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  flex-grow: 1;
  width: 30%;
`
export const TopHalf = styled.div`
  ${css.flex()};
`
export const BaseInfo = styled.div`
  flex-grow: 1;
  margin-bottom: 6px;
  ${css.media.mobile`
    max-width: 75%;
 `};
`
export const CompanyLogo = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  ${css.media.mobile`
    width: 40px;
    height: 40px;
  `};
`
export const Header = styled.div``
export const Middle = styled.div`
  ${css.flex()};
  margin-top: 7px;
  margin-left: -2px;
`
export const Footer = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  ${css.media.mobile`
    ${css.cutRest('100px')};
  `};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
  ${css.media.mobile`
    ${css.cutRest('90px')};
  `};
`
export const StatesWrapper = styled.div`
  ${css.flex()};
  color: ${theme('thread.articleDigest')};
`
const BaseState = styled.div`
  border: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0 5px;
  margin-right: 6px;
`

export const StateItem = styled(BaseState)`
  ${css.media.mobile`display: none`};
`

export const FinanceState = styled(BaseState)``
