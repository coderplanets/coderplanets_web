import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')};

  border: 1px dashed;
  margin-left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border-color: ${theme('thread.articleDigest')};
  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const AddText = styled.div`
  font-size: 1.1rem;
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
