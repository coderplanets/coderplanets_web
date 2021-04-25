import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Option = styled.div`
  ${css.flex('align-center')};
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 1px solid;
  border-bottom-color: #125065;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`
export const QuestionIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
  margin-right: 10px;
  opacity: 0;

  ${Option}:hover & {
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const Note = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 22px;
  font-size: 14px;
`
