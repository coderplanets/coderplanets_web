import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: space-between;
`
export const BoxWrapper = styled.div`
  min-width: 100px;
  height: 70px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-right: ${({ nomargin }) => (nomargin ? 0 : '15px')};
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-top: 2px solid;
  border-top-color: ${theme('banner.title')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  display: flex;
  flex-direction: column;
`
export const Label = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
`
export const Number = styled.div`
  font-size: ${({ small }) => (small ? 1.1 : '1.3rem')};
  color: ${theme('banner.title')};
`

export const BuilderWrapper = styled.div`
  display: flex;
`
export const Avatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-left: 6px;
  opacity: 0.8;
  display: block;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const MoreText = styled.div`
  font-size: 1rem;
  margin-left: 5px;
  color: ${theme('banner.desc')};
`
