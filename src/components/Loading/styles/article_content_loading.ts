import styled from 'styled-components'

import type { TSpace } from '@/spec'

export const Wrapper = styled.div<TSpace>`
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
  margin-top: ${({ top }) => `${top || 0}px`};
  margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`

// Config-page: http://danilowoz.com/create-react-content-loader/
export const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
