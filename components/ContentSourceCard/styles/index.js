import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  min-height: 180px;
  padding: 20px;
  padding-bottom: 0;
  max-width: 300px;
  flex-wrap: wrap;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1em;
`
export const Desc = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  border-bottom: ${({ noBottom }) => (noBottom ? '' : '1px solid')};
  border-color: ${theme('preview.divider')};
  max-width: 100%;
  flex-wrap: wrap;
`
export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
