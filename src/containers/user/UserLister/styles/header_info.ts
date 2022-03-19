import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-bottom: 12px;
  margin-left: 4px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  margin-bottom: 3px;
`
export const DescLabel = styled.div`
  ${css.flex('align-center')};
`
export const DescIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 5px;
`
export const DescLink = styled.a`
  color: #139c9e;
  text-decoration: none;
  margin-left: 25px;

  &:hover {
    color: #139c9e;
    cursor: pointer;
    text-decoration: underline;
  }
  transition: color 0.2s;
`
export const DescText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
`
