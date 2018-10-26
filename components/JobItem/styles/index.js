import styled from 'styled-components'

// import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: #dce5e6;

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`
export const ReadedLabel = styled.div`
  position: absolute;
  top: 10px;
  left: -30px;
  font-size: 0.75rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
