import styled from 'styled-components'

// import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.article`
  ${cs.flex('align-center')};

  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`

export const holder = 1
