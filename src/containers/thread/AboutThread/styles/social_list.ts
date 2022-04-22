import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 4px;
  margin-right: 16px;
  /* text-decoration: underline; */
  &:hover {
    color: ${theme('thread.extraInfo')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  margin-right: 2px;

  ${SocialWrapper}:hover & {
    fill: ${theme('thread.extraInfo')};
  }
`
export const Title = styled.div`
  font-size: 12px;
  margin-left: 3px;
  margin-top: 2px;
`
