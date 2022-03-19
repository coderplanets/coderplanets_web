import styled from 'styled-components'

import css from '@/utils/css'

export const ArticlesWrapper = styled.div<{ hasContentBg: boolean }>`
  margin-top: 10px;

  margin-left: ${({ hasContentBg }) => (hasContentBg ? '5px' : '-18px')};
  margin-right: ${({ hasContentBg }) => (hasContentBg ? '20px' : '-18px')};

  ${css.media.mobile`
    padding: 0 15px;
  `};
`
export const Title = styled.div``
