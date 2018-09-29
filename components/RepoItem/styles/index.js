import styled from 'styled-components'

// import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  padding-left: 8px;
  padding-right: 8px;
  padding-top: 22px;
  padding-bottom: 22px;
  border-radius: 4px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleSpliter')};
  opacity: ${({ active }) => (active ? 0.6 : 1)};
  &:hover {
    background: ${theme('thread.articleHover')};
  }
`
export const BodyDigest = styled.li`
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;
  margin-top: -5px;
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;
  max-width: 85%;

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`
