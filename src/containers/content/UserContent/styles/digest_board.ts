import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const CardWrapper = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  padding: 20px;
  padding-bottom: 10px;
  min-height: 100px;
  margin-bottom: 15px;
`
export const AttachWrapper = styled.div`
  ${css.flex('align-center')};
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  margin-left: 10px;
  margin-bottom: 4px;
`
export const AttachIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(15)};
  margin-right: 5px;
`
export const AttachLink = styled.a`
  text-decoration: underline;
  font-weight: bolder;
  transition: color 0.3s;
  color: ${theme('banner.desc')};

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
