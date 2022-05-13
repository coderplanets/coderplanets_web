import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import LaptopSVG from '@/icons/Works'

type TWrapper = TTestable & { color?: string; column: number }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn()};
  background: transparent;
  width: ${({ column }) => (column === 2 ? '50%' : '33%')};
  min-height: 80px;
  padding: 15px 20px;
  padding-left: 0;
  margin-bottom: 20px;

  transition: all 0.2s;
`

export const Header = styled.div`
  ${css.flexColumn()};
  margin-bottom: 12px;
`
export const IconWrapper = styled.div`
  ${css.circle(32)};
  ${css.flex('align-both')};

  ${Wrapper}:hover & {
    background: #f5f5f5; //${theme('border')};
  }
`
export const Icon = styled(LaptopSVG)`
  ${css.size(18)};
  fill: ${theme('thread.extraInfo')};
`
export const Title = styled.div<{ color: string }>`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
`
export const Item = styled.div<{ color: string }>`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 6px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const MoreLink = styled.div`
  color: ${theme('link')};
  font-size: 12px;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.2s;
`
