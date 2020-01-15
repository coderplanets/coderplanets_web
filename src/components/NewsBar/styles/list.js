import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  padding: 5px;
`
export const ListItemWrapper = styled.div`
  width: 100%;
  color: ${theme('thread.articleDigest')};
  border-bottom: 1px solid;
  border-bottom-color: #034256;
  padding: 10px;
  :last-child {
    border-bottom: none;
  }
`
export const Header = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 4px;
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  display: block;
  ${cs.circle('13px')};
  margin-right: 6px;
`

export const Timestamp = styled.div`
  ${cs.flex()};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
