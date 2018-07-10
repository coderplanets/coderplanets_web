import styled from 'styled-components'
import { theme } from '../../../utils'

export const Container = styled.div`
  margin: 20px;
  padding: 18px;
  background: ${theme('preview.articleBg')};
  min-height: 400px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
`

export const HeaderDesc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
`
