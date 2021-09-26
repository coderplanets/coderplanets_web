import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  /* ${css.flexColumn('align-center')}; */
  width: calc(100% - 30px);
  min-height: 30vh;
  margin-left: 8px;
  /* tmp */
  margin-top: 30px;
`
export const Item = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16.5px;
`
export const Digest = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
