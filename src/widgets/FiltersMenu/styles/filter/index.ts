import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ revert: boolean }>`
  ${css.flexColumn()};
  align-items: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  padding: 4px;
  padding-top: 0;
`
type TagsWrapper = { revert?: boolean }
export const TagsWrapper = styled.div<TagsWrapper>`
  ${css.flexColumn()};
  align-items: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  margin-top: 5px;
`

export const Item = styled.div<{ revert: boolean }>`
  ${css.flex('align-center')};
  justify-content: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  width: 100%;
`
