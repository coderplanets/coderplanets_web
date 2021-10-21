import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding: 10px 0;
  background: ${theme('modal.subPanel')};
  min-height: 300px;
  height: auto;
  border-bottom: 3px solid;
  border-color: #00424f;
  transition: all 0.2s;
`

export const Header = styled.div`
  ${css.flexColumn()};
  height: 68px;
  padding: 0 28px;
  padding-bottom: 8px;
  width: 100%;
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
`
export const ReplyToHint = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 6px;
`
export const ReplyToContent = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
export const ReplyToAuthor = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-left: 5px;
`
export const EditorWrapper = styled.div`
  overflow-x: hidden;
  padding-top: 10px;
  background: #002a34;
  min-height: 320px;
`
export const FooterWrapper = styled.div`
  width: 100%;
  padding-top: 16px;
`
