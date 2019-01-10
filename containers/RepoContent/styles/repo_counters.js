import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  margin-bottom: 13px;
`
export const CountItem = styled.a`
  ${cs.flex('align-center')};

  color: ${theme('thread.articleTitle')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-top: -1px;
  display: block;
`
export const StarIcon = styled(CountIcon)`
  margin-top: -4px;
`
export const CountText = styled.div`
  font-size: 0.9rem;
  color: ${theme('thread.articleTitle')};
  margin-right: 2px;
`
