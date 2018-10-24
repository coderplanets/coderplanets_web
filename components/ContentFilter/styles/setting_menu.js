import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  width: 110px;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  padding-right: 5px;
  margin: 0 10px;
`
export const Title = styled.div`
  font-size: 0.9rem;
  margin-bottom: 2px;
  color: ${theme('thread.articleTitle')};
`
export const Didiver = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  margin: 10px 0;
  width: 100%;
  opacity: 0.6;
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`
export const OptionIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 18px;
  height: 18px;
  margin-left: 5px;
  display: block;
  opacity: ${({ active }) => (active ? 1 : 0)};

  ${Option}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const OptionText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;

  ${Option}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
