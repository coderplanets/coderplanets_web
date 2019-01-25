import styled from 'styled-components'

// import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const NoteWrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 20px;
`
export const NoteTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  font-weight: bold;
`
export const NoteDivider = styled.div`
  border-bottom-color: ${theme('banner.desc')};
  border-bottom: 1px solid;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 90%;
  opacity: 0.4;
`
export const NoteDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
export const FootNote = styled.div`
  margin-top: 15px;
`
export const SycNote = styled.div`
  ${cs.flex('align-center')};

  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 0.8rem;
`

export const JoinText = styled.a`
  color: ${theme('thread.articleDigest')};
  text-decoration: underline;
  margin-right: 3px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
  }
`
