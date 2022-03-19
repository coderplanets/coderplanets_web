import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
`
export const Main = styled.div`
  ${css.flex('align-center')};
  width: 80px;
`
const NotifyIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  margin-right: 5px;
  cursor: pointer;
`
export const NotifyOnIcon = styled(NotifyIcon)`
  fill: #00a49a;
`
export const NotifyOffIcon = styled(NotifyIcon)`
  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const Title = styled.div<{ active?: boolean }>`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 13px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: color 0.2s;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 160px;
  font-size: 12px;
`
export const Focus = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-left: 2px;
  margin-right: 2px;
`
