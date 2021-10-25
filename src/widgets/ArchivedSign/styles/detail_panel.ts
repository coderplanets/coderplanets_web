import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 200px;
  /* border: 1px solid;
  border-color: #00424f;
  padding: 0 8px;
  border-radius: 4px; */
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: 13px;
`
export const LinksWrapper = styled.div`
  ${css.flex('justify-start')};
  margin-top: 15px;
  margin-left: -3px;
`
