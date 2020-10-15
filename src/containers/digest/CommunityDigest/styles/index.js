import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))``

export const BaseBanner = styled.nav`
  ${css.flexColumn('justify-center')};
  position: relative;

  align-items: center;
  min-height: 140px;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    // min-height: 130px;
  }
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
