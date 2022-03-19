import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
// import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = {
  showSidebar: boolean
} & TTestable

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn()};
  width: ${({ showSidebar }) => (showSidebar ? '210px' : '246px')};
  margin-left: ${({ showSidebar }) => (showSidebar ? '45px' : '60px')};
  color: ${theme('thread.articleDigest')};
`
export const SubDesc = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-top: 12px;
  margin-bottom: 8px;
  line-height: 20px;
  opacity: 0.8;
`
export const Divider = styled.div<TSpace>`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: ${({ top }) => `${top}px` || '25px'};
  margin-bottom: ${({ bottom }) => `${bottom}px` || '15px'};
  opacity: 0.6;
`

export const PublishBtnWrapper = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`
export const InterviewsWrapper = styled.div`
  margin-left: 3px;
`
export const SubscribeWrapper = styled.div<{ showSidebar: boolean }>`
  padding: 0 5px;
  padding: ${({ showSidebar }) => (showSidebar ? '0' : '0 5px')};
`
export const Footer = styled.div`
  ${css.flex('justify-center')};
`
