import styled from 'styled-components'

import { theme, cs } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: 6px;
`
export const SocialWrapper = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.desc')};
  font-size: 12px;
  /* border: 1px solid; */
  /* border-color: ${theme('banner.desc')}; */
  border-radius: 5px;
  margin-right: 12px;
  text-decoration: underline;

  &:hover {
    color: ${theme('banner.active')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  border-radius: 50%;
  width: 14px;
  height: 14px;
  padding: 0;
  margin-right: 4px;
  display: block;

  ${SocialWrapper}:hover & {
    fill: ${theme('banner.active')};
  }
`
