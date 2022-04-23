import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import LaptopSVG from '@/icons/Laptop'

type TWrapper = TTestable | { color?: string }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn()};
  background: transparent;
  width: 50%;
  min-height: 80px;
  padding: 15px 20px;
  padding-left: 0;
  margin-bottom: 20px;

  transition: all 0.2s;
`

export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const Icon = styled(LaptopSVG)`
  ${css.size(16)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 10px;
`
export const Title = styled.div<{ color: string }>`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: 600;
`
export const Item = styled.div<{ color: string }>`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 4px;
  margin-left: 25px;

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
  margin-left: 24px;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.2s;
`
