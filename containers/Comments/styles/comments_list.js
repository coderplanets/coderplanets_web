import styled from 'styled-components'

import { theme, cs } from 'utils'

// min-height: 300px;
export const ListsContainer = styled.div`
  ${cs.flexColumn('')};
  border-radius: 4px;
`

export const TotalHeader = styled.div`
  ${cs.flex('align-center')};
  margin-top: 25px;
  margin-bottom: 10px;
`
export const TotalCountWrapper = styled.div`
  flex-grow: 1;
`

export const ListTitle = styled.div`
  color: ${theme('comment.title')};
  font-size: 1rem;
  margin-left: 2px;
`

export const TotalNum = styled.span`
  color: ${theme('comment.number')};
  font-size: 1.3em;
`

export const CommentBlock = styled.div`
  ${cs.flex()};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('preview.articleBg')};
`
