import styled from 'styled-components'

/* import { Img } from '../../../components' */
import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const OptisonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  display: flex;
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  background: ${({ active }) => (active ? theme('mailBox.headHightBg') : '')};
  padding: 2px 8px;
  border-radius: 5px;
  align-items: center;
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
