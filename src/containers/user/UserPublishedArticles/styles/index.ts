import styled from 'styled-components'

// import { theme } from '@/utils/themes'

export const ArticlesWrapper = styled.div<{ hasContentBg: boolean }>`
  margin-top: 10px;

  margin-left: ${({ hasContentBg }) => (hasContentBg ? '5px' : '-18px')};
  margin-right: ${({ hasContentBg }) => (hasContentBg ? '20px' : '-18px')};
`
export const Title = styled.div``
