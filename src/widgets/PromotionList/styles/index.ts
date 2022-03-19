import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  margin-left: 15px;
  min-height: 150px;
  max-width: 180px;
  margin-top: 15px;
`
export const Header = styled.div`
  ${css.flex('justify-between', 'align-center')};
  margin-bottom: 12px;
  padding-top: 20px;
  border-top: 1px solid;
  border-top-color: ${theme('thread.articleSpliter')};
  width: 100%;
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`

export const MoreHint = styled.div`
  margin-top: 1px;
  opacity: 0;

  ${Header}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
