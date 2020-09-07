import styled from 'styled-components'

// BodyWrapper, BodyHeader, BackToEditBtn, PreviewHeader
import { theme, cs } from '@/utils'

export { Wrapper } from './editor'

export const Header = styled.div`
  ${cs.flex('justify-end')};
  margin-bottom: 10px;
`
export const PreviewHeader = styled.div`
  color: ${theme('drawer.title')};
  margin-bottom: 15px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 1.5em;
  align-self: center;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  width: 80%;
  min-height: 1.5em;
`

export const BackToEditBtn = styled.div``
