import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const OptionWrapper = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
`
export const OptionItem = styled.div`
  ${cs.flex()};
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: ${theme('banner.desc')};
  font-weight: bold;
  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
export const OptionCheckIcon = styled(Img)`
  fill: ${theme('banner.title')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: 12px;
  height: 12px;
  margin-right: 3px;
`
export const OptionText = styled.div``
