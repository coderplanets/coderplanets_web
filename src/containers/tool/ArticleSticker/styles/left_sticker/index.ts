import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import { FadeToggle } from '@/widgets/Common'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

// see https://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container
export const Wrapper = styled(FadeToggle).attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TActive>`
  ${css.flexColumn('align-center')};
  position: fixed;
  width: 100px;
  left: 0;
  top: 10%;
  transform: translateX(-50%);
  font-size: 13px;

  ${css.media.desktopL`
    left: 22%;
  `}

  ${css.media.laptopL`
    left: 12%;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const BackWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-left: -4px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
`
export const BackText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
  margin-top: 1px;
`

export const Divider = styled.div`
  width: 20px;
  height: 1px;
  margin-right: 4px;
  background: ${theme('border')};
  margin-top: 20px;
  margin-bottom: 20px;
`
