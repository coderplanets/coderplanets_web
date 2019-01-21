import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const OptisonsWrapper = styled.div`
  ${cs.flex('justify-evenly')};
  padding-top: 3px;
`
export const HeaderDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 90%;
  align-self: center;
  opacity: 0.5;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Option = styled.div`
  ${cs.flex('align-center')};

  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) => (active ? theme('mailBox.headHightBg') : '')};
  padding: 2px 8px;
  border-radius: 5px;
  line-height: 1;

  &:hover {
    cursor: pointer;
    font-size: bold;
  }
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  width: 18px;
  height: 18px;
  margin-right: 3px;
`
export const Title = styled.div``
