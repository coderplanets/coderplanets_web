import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
/* header bg */
export const Community = styled.a`
  ${css.flex('align-center', 'justify-between')};
  height: 30px;
  margin-right: 16px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
  }
`
export const Logo = styled(Img)`
  fill: #317faf;
  ${css.circle(18)};
  filter: saturate(0.6);
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 7px;
`
