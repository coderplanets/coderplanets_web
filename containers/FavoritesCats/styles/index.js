import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border: ${({ active }) => (active ? '2px solid' : '1px dashed')};
  border-color: ${theme('banner.desc')};
  margin-right: 15px;
  margin-bottom: 18px;
  height: 130px;
  width: 210px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${theme('banner.desc')};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const EditIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 20px;
  height: 20px;
  display: none;

  ${BoxWrapper}:hover & {
    display: block;
    cursor: pointer;
    fill: ${theme('banner.title')};
  }
`

export const TitleText = styled.div`
  font-size: 1rem;
  color: ${theme('banner.title')};
`

export const LockIcon = styled(Img)`
  width: 18px;
  height: 18px;
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  margin-top: 5px;
`

export const Desc = styled.div`
  color: ${theme('banner.desc')};
  flex-grow: 1;
  margin-top: 5px;
`

export const FooterCounter = styled.div`
  color: ${theme('banner.desc')};
  flex-grow: 1;
  font-size: 0.8rem;
`
export const FooterUpdate = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
`
