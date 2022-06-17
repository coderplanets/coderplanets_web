import styled from 'styled-components'

import type { TTestable, TSizeSM } from '@/spec'
import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  display: flex;
  flex-wrap: wrap;
`
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('banner.desc')};
  font-size: 12px;
  /* border: 1px solid; */
  /* border-color: ${theme('banner.desc')}; */
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 0;
  width: auto;
  text-decoration: underline;

  &:hover {
    color: ${theme('banner.active')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)<{ size: TSizeSM }>`
  fill: ${theme('banner.desc')};
  border-radius: 50%;
  width: ${({ size }) => (size === 'small' ? '13px;' : '17px')};
  height: ${({ size }) => (size === 'small' ? '13px;' : '17px')};
  padding: 0;
  margin-right: ${({ size }) => (size === 'small' ? '2px' : '10px')};
  display: block;

  ${SocialWrapper}:hover & {
    fill: ${theme('banner.active')};
  }
`
export const Title = styled.div<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '12px;' : '14px')};
`
