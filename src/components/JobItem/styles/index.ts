import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

type TWrapper = { opacity: number; divider: boolean }
export const Wrapper = styled.article<TWrapper>`
  ${css.flex('align-start')};

  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  transition: all 0.25s;
`

export const holder = 1
