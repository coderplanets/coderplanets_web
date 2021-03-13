import styled from 'styled-components'

import { Button } from '@/components/Buttons'
import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-start')};
  padding: 5px 10px;
  margin-top: 10px;
`
export const PlanTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  width: 150px;
  font-size: 0.9rem;
  margin-top: 2px;
`
export const GirlTitle = styled(PlanTitle)`
  ${css.flexColumn()};
  color: ${theme('baseColor.pink')};
`
export const TitleDesc = styled.div<{ pink: boolean }>`
  color: ${({ pink }) =>
    pink ? theme('baseColor.pinkLite') : theme('thread.articleDigest')};
`
export const PlanDesc = styled.div`
  ${css.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
`
export const PurchaseButton = styled.div`
  margin-top: 2px;
  width: 130px;
  text-align: center;
`
const pinkHover = `
  background-color: ${theme('baseColor.pink')};
  border-color: ${theme('baseColor.pink')};
  opacity: 0.6;
`
export const PinkButton = styled(Button)`
  color: white;
  background-color: ${theme('baseColor.pink')};
  border-color: ${theme('baseColor.pink')};
  &:focus {
    ${pinkHover};
    color: ${theme('baseColor.pinkBtnText')};
  }
  &:hover {
    ${pinkHover};
    color: ${theme('baseColor.pinkBtnText')};
  }
  &:active {
    ${pinkHover};
  }
`
export const DescLine = styled.div<{ green: boolean }>`
  color: ${({ green }) => (green ? theme('baseColor.green') : '')};
  font-size: 0.85rem;
  margin-bottom: 4px;
`
export const MoreLink = styled.a`
  color: ${theme('markdown.link')};
  font-size: 0.8rem;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
    color: ${theme('markdown.link')};
  }
`
export const BadPrice = styled.span`
  text-decoration: line-through;
  color: ${theme('baseColor.red')};
`
export const GoodPrice = styled.span`
  color: ${theme('baseColor.green')};
  font-weight: bold;
`

export const BadgeWrapper = styled.div`
  width: 130px;
  text-align: center;
  margin-top: -2px;
`

export const BadgeIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(40)};
`
