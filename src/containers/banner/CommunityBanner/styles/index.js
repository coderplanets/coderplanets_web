import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testId,
}))``

export const BaseBanner = styled.nav`
  ${cs.flexColumn('justify-center')};
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
  ${cs.flex()};

  position: absolute;
  bottom: 0;
  margin-left: -10px;
  width: 80vw;
  overflow-x: auto;
  overflow-y: hidden;

  ${cs.media.tablet`
    left: 10px;
    width: 100%;
  `};
`
