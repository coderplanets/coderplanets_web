import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

import Img from '@/Img'
import AdminStarSVG from '@/icons/AdminStar'

type TWrapper = TTestable & TSpace
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  position: relative;

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const Avatar = styled(Img)`
  ${css.circle(40)};
  margin-bottom: 20px;
  border: 2px solid;
  border-color: ${theme('thread.articleTitle')};
  padding: 2px;
`
export const BadgeWrapper = styled.div`
  ${css.circle(14)};
  ${css.flex('align-both')};
  background: ${theme('thread.articleTitle')};
  padding: 1px;
  border: 2px solid white;
  position: absolute;
  right: 0;
  bottom: 18px;
  z-index: 2;
`

export const BadgeIcon = styled(AdminStarSVG)`
  ${css.size(10)};
  fill: white;
`
