import styled from 'styled-components'

// BodyWrapper, BodyHeader, BackToEditBtn, PreviewHeader
import { theme } from '../../../utils'

export { BodyHeader, BodyWrapper } from './index'

export const PreviewHeader = styled.div`
  color: ${theme('preview.title')};
  margin-bottom: 15px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 1.5em;
  align-self: center;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
  width: 80%;
  min-height: 1.5em;
`

export const BackToEditBtn = styled.div``
