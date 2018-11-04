import styled from 'styled-components'
import { Button } from 'antd'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const PlanWrapper = styled.div`
  ${cs.flex('align-start')};
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
export const GirlTitle = styled(PlanTitle)`
  ${cs.flexColumn()};
  color: #ff7199;
`
export const TitleDesc = styled.div`
  color: ${({ pink }) => (pink ? '#ffafc9' : theme('thread.articleDigest'))};
`
export const PlanDesc = styled.div`
  ${cs.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
`
export const PurchaseButton = styled.div`
  margin-top: 2px;
  width: 130px;
  text-align: center;
`
const pinkHover = `
  background-color: #ff7199  !important;
  border-color: #ff7199;
  color: white;
`
export const PinkButton = styled(Button)`
  color: white;
  background-color: #f59dba;
  border-color: #f59dba;
  &:focus {
    ${pinkHover};
  }
  &:hover {
    ${pinkHover};
  }
  &:active {
    ${pinkHover};
  }
`
export const DescLine = styled.div`
  color: ${({ green }) => (green ? 'yellowgreen' : '')};
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
