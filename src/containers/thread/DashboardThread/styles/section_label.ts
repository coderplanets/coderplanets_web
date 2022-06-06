import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Header = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div<{ noDesc: boolean }>`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: ${({ noDesc }) => (noDesc ? '25px' : '0')};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 25px;
`
