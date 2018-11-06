import styled from 'styled-components'

// import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.article`
  ${cs.flexColumnGrow()};

  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 18px;
  padding-bottom: 18px;
  border-radius: 4px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleSpliter')};
  opacity: ${({ opacity }) => opacity};

  &:hover {
    background: ${theme('thread.articleHover')};
  }
`
export const ReadedLabel = styled.div`
  position: absolute;
  top: 24px;
  left: -30px;
  font-size: 0.75rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
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
