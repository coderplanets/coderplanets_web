import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('justify-center')};
  width: 280px;
  height: 116px;
  padding-left: 25px;
`
export const BadgeWrapper = styled.div`
  ${css.flex('align-center')};
  padding-bottom: 33px;
`
export const Logo = styled(Img)`
  ${css.size(32)};
  filter: saturate(0.8);
`
export const Intro = styled.div`
  /* margin-left: 10px; */
`
export const PubHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  opacity: 0.85;
`
export const Title = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-top: 3px;
  margin-bottom: 5px;
`
export const ChangeBtn = styled.div`
  color: ${theme('button.primary')};
  font-size: 13px;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
