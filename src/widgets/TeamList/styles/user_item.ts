import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  ${css.flex('align-center')};
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${css.circle(32)};
  margin-right: 10px;
  fill: ${theme('button.primary')};
`
export const Intro = styled.div`
  flex-grow: 1;
`
export const Name = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 16px;

  ${Wrapper}:hover & {
    color: #139b9d;
  }
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('380px')};

  ${Wrapper}:hover & {
    color: #139b9d;
    opacity: 0.8;
  }
`
