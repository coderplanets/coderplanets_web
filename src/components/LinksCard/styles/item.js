import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-bottom: 8px;
`
export const Title = styled.div`
  /* ${css.flex('align-center')}; */
  ${css.cutFrom('200px')};
  color: ${theme('banner.desc')};

  ${Wrapper}:hover & {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
export const Reaction = styled.div`
  ${css.flex('align-center')};
  opacity: 0.8;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(11)};
  margin-right: 3px;
  margin-top: -1px;
`
export const Count = styled.div`
  color: ${theme('banner.desc')};
  font-size: 12px;
`
