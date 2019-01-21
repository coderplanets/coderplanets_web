import styled from 'styled-components'
// import Img from 'components/Img'
import { theme } from 'utils'

export const PlanDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('tabs.bottomLine')};
  margin: 10px 0;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`
export const holder = 1
