import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

type TWrapper = {
  hasReplies: boolean
  withoutBottomDivider: boolean
}

export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  margin-top: 5px;
  padding-bottom: ${({ hasReplies }) => (hasReplies ? '16px' : '10px')};
  border-bottom: 1px solid;
  border-bottom-color: ${({ withoutBottomDivider }) =>
    withoutBottomDivider ? 'transparent' : '#0a3846'};
`
export const holder = 1
