import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const TopHalf = styled.div`
  display: flex;
`
export const BaseInfo = styled.div`
  flex-grow: 1;
`
export const CompanyLogo = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`
export const Header = styled.div``
export const Middle = styled.div`
  display: flex;
  padding: 5px 0;
  margin-top: 1px;
  margin-bottom: 1px;
`
export const Footer = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
`
export const StatesWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  display: flex;
  margin-bottom: 2px;
`
export const StateItem = styled.div`
  border: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  border-radius: 8px;
  font-size: 0.75rem;
  padding: 0 5px;
  margin-right: 6px;
`
