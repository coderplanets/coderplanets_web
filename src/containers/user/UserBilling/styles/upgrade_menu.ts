import styled from 'styled-components'
// import Img from '@/Img'
import { theme } from '@/utils/css'

export const PlanDivider = styled.div<{ hide: boolean }>`
  border-bottom: 1px solid;
  border-color: ${theme('tabs.bottomLine')};
  margin: 10px 0;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`
export const holder = 1
