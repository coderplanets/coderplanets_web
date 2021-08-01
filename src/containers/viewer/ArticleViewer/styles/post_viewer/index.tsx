import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  padding: 0 8px;
`
export const BodyWrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px;
  min-height: 400px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 25px;
`
export const ArticleBody = styled.article`
  font-size: 1.2em;
  line-height: 2em;
  flex-grow: 1;
`
