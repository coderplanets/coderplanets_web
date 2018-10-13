import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 48%;
  flex-direction: column;
`
export const Header = styled.div``
export const Middle = styled.div`
  display: flex;
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
  display: flex;
`
export const Background = styled.div`
  display: flex;
  align-items: center;
  color: ${theme('thread.articleDigest')};
`
export const Degree = styled.div``
export const Exp = styled.div``

export const Extra = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.8rem;
`
export const ExpDivider = styled.div`
  margin-left: 4px;
  margin-right: 4px;
`
