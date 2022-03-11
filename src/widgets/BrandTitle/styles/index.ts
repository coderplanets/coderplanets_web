import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = TTestable & { mBottom: number }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  margin-bottom: ${({ mBottom }) => `${mBottom}px`};
`
export const Title = styled.div`
  ${css.flex()};
  cursor: pointer;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 13px;
  margin-top: 15px;
`
type TBrandText = { fontSize: number }
export const BrandText = styled.div<TBrandText>`
  color: ${theme('thread.articleTitle')};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
  padding: 0 4px;
  border-radius: 3px;
  letter-spacing: 1px;

  background: linear-gradient(
    to top,
    #003b49 35%,
    transparent 35%,
    transparent 80%
  );
`
