import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  flex-grow: 1;
  width: 48%;
  max-width: 60%;
`
export const Header = styled.div``
export const Middle = styled.div`
  ${cs.flex()};
  padding: 5px 0;
  margin-bottom: 2px;
`
export const Footer = styled.div`
  color: ${theme('thread.articleDigest')};
`

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  width: 90%;
`
export const SalaryWrapper = styled.div`
  font-size: 1rem;
  color: ${theme('contrastFg')};
  margin-right: 20px;
`
export const BackgroundWrapper = styled.div`
  ${cs.flex()};
`
export const TagsWrapper = styled.div`
  margin-top: 11px;
`

export const Background = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const Degree = styled.div``
export const Exp = styled.div``

export const Extra = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.8rem;
`
export const ExpDivider = styled.div`
  margin-left: 4px;
  margin-right: 4px;
`
