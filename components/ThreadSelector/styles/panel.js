import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 5px 12px;
  padding-top: 12px;
`
export const Item = styled.div`
  ${cs.flex('align-center')};

  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
export const DotWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`
