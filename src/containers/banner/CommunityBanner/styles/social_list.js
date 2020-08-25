import styled from 'styled-components'

import { theme, cs } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: ${({ direction }) => direction}; */
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
  margin-bottom: ${({ direction }) => (direction === 'row' ? '0' : '10px')};
  width: ${({ direction }) =>
    direction === '2-column' ? 'calc(50% - 24px)' : 'auto'};

  text-decoration: underline;

  &:hover {
    color: ${theme('banner.active')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  border-radius: 50%;
  width: ${({ size }) => (size === 'small' ? '14px;' : '17px')};
  height: ${({ size }) => (size === 'small' ? '14px;' : '17px')};
  padding: 0;
  margin-right: ${({ size }) => (size === 'small' ? '4px;' : '10px')};
  display: block;

  ${SocialWrapper}:hover & {
    fill: ${theme('banner.active')};
  }
`
export const Title = styled.div`
  font-size: ${({ size }) => (size === 'small' ? '12px;' : '14px')};
`
