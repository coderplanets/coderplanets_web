import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import PullShapeSVG from '@/icons/PullShape'
import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 42%;
  right: -30px;

  width: 30px;
  height: 120px;
  cursor: pointer;
`
export const Shape = styled(PullShapeSVG)`
  fill: ${theme('sidebar.bg')};
  width: 120px;
  height: 40px;
  position: absolute;
  top: 38px;
  left: -48px;
  transform: rotate(90deg);
`
export const ArrowIcon = styled(ArrowSVG)<{ ispulled: boolean }>`
  position: absolute;
  top: 44px;
  left: 0;
  ${css.size(24)};
  fill: ${theme('thread.articleDigest')};
  z-index: 1;

  transform: ${({ ispulled }) => (ispulled ? 'rotate(0)' : 'rotate(180deg)')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    ${css.size(25)};
  }
  transition: all 0.2s;
`
