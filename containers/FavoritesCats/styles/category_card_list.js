import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div``
export const CardListWrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
`
export const BoxWrapper = styled.div`
  ${cs.flexColumn()};
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
  ${cs.flex('align-center')};
`
export const Footer = styled.div`
  ${cs.flex()};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  ${cs.flexGrow('align-center')};
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
  &:hover {
    cursor: pointer;
  }
`
export const LockIcon = styled(Img)`
  width: 18px;
  height: 18px;
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`
export const Desc = styled.div`
  color: ${theme('banner.desc')};
  flex-grow: 1;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
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
