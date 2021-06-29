import styled from 'styled-components'

import Img from '@/Img'
import type { TTestable } from '@/spec'
import { theme, css, WIDTH, pixelAdd } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-center')};
  min-height: 70vh;
  width: 100%;

  ${css.media.tablet`
    width: 100%;
    margin: 0;
    padding: .6em;
    padding-top: 0;
    padding-right: 0;
  `};
`
export const InnerWrapper = styled.div<{ isClassicLayout: boolean }>`
  margin-top: 20px;
  width: 100%;
  max-width: ${pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)};
  margin-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET};

  ${css.flex()};

  flex-direction: ${({ isClassicLayout }) => {
    return isClassicLayout ? 'column' : 'row'
  }};

  padding-top: 0;
  color: ${theme('font')};
  /* background: ${theme('content.bg')}; */

  /* border: 1px solid;
  border-color: ${theme('content.border')}; */
  /* border-radius: 6px; */

  ${css.media.mobile`
    margin: 0 3%;
    padding-top: 0;
  `};
`

export const TmpSubedBox = styled.div`
  width: 200px;
  margin-top: 10px;
  margin-right: 20px;
  height: 400px;
  color: #5b7b81;
  padding-top: 10px;
  padding-left: 10px;
`
export const SubTitle = styled.div`
  font-size: 15px;
`
export const ItemDivider = styled.div`
  width: 80px;
  height: 1px;
  background: #004757;
  margin-top: 8px;
  margin-bottom: 10px;
`
export const SubItem = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const SubIcon = styled(Img)`
  ${css.size(18)};
  border-radius: 5px;
  margin-right: 7px;
  filter: saturate(0.5);
`
