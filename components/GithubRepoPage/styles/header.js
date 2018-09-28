import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const TitlesWrapper = styled.div`
  font-size: 1.3rem;
`
export const TitleLink = styled.a`
  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountsWrapper = styled.div`
  display: flex;
`
export const CountItem = styled.a`
  display: flex;
  align-items: center;

  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 15px;
  height: 15px;
  margin-right: 4px;
  margin-top: -3px;
  display: block;
`
export const StarIcon = styled(CountIcon)`
  margin-top: -4px;
`
export const CountDivider = styled(CountIcon)`
  margin-left: 1px;
  margin-right: 1px;
`

export const CountText = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.title')};
`
