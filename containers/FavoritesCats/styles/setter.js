import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 15px 25px;
`
export const ListWrapper = styled.div``
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`
export const CatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  &:hover {
    background: ${theme('thread.articleHover')};
  }
`
export const CatContent = styled.div`
  display: flex;
  align-items: center;
`
export const CatMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const SetBtn = styled.div``

export const CatHeader = styled.div`
  display: flex;
`
export const CatTitle = styled.div`
  color: ${theme('banner.desc')};
  font-weight: bold;
  font-size: 1rem;
`
export const CatDec = styled.div`
  color: ${theme('banner.desc')};
`
export const CatCounter = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.desc')};
`
export const CatDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  width: 100%;
  opacity: 0.4;
`
