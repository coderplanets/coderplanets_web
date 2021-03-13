import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  font-size: 12px;
  margin-bottom: 15px;
`
export const NationsWrapper = styled.div`
  ${css.flex('align-center')};
  opacity: 0.8;

  transition: all 0.25s;
`
export const NationFlag = styled(Img)<{ marginRight: boolean }>`
  width: 16px;
  display: block;
  border-radius: 3px;
  margin-right: ${({ marginRight }) => (marginRight ? '5px' : '0')};
`
export const MoreIcon = styled(Img)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
`
export const MenuItem = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
