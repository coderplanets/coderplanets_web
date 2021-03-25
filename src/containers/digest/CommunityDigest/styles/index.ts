import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: 100%;
`
export const BaseBanner = styled.nav`
  ${css.flexColumn('justify-center', 'align-center')};
  position: relative;
  min-height: 140px;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
`
export const BaseTabber = styled.div`
  ${css.flex()};

  position: absolute;
  bottom: 0;
  margin-left: -10px;
  width: 80vw;
  overflow-x: auto;
  overflow-y: hidden;

  ${css.media.tablet`
    left: 0;
    width: calc(100% - 5%);
    padding-left: calc(3% + 15px);
  `};
`
