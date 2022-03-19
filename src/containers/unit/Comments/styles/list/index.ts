import styled from 'styled-components'

import css, { theme } from '@/utils/css'

// min-height: 300px;
export const ListsWrapper = styled.div`
  ${css.flexColumn('')};
  border-radius: 4px;
`
export const CommentBlock = styled.div`
  ${css.flex()};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('drawer.articleBg')};
`
