import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const PlanWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px 10px;
  margin-top: 10px;
`
export const PlanDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('tabs.bottomLine')};
  margin: 10px 0;
`
export const PlanTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  width: 150px;
  font-size: 0.9rem;
  margin-top: 2px;
`
export const PlanDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const PurchaseButton = styled.div`
  margin-top: 2px;
  width: 130px;
  text-align: center;
`
export const DescLine = styled.div`
  font-size: 0.9rem;
  margin-bottom: 3px;
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
  color: tomato;
  opacity: 0.8;
`
export const GoodPrice = styled.span`
  color: yellowgreen;
  font-weight: bold;
`
