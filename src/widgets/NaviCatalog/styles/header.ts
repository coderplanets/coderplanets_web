import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

const activeColor = '#009C9E'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center', 'justify-between')}
  width: 100%;
  margin-bottom: 8px;
`
export const Title = styled.div<TActive>`
  position: relative;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleTitle')};
  font-size: 15px;
  padding-left: 5px;
`
export const OperatorsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Operator = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-left: 6px;
`
export const OperateIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const LocateIcon = styled(OperateIcon)``
export const HomeIcon = styled(OperateIcon)``

export const ResetIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const HelpHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  padding: 2px 5px;
`
