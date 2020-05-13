import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  min-height: 100px;
  padding: 10px;
  padding-bottom: 0;
  max-width: 300px;
  width: 100%;
  flex-wrap: wrap;

  ${cs.media.tablet`
    width: 50%;
    padding: 10px;
  `};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1em;
`
export const Desc = styled.div`
  ${cs.flex()};
  margin-top: 15px;
  margin-bottom: 20px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex-wrap: wrap;

  ${cs.media.mobile`
    margin-top: 6px;
    margin-bottom: 10px;
  `};
`
export const Didiver = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid;
  border-color: ${theme('preview.sideDivider')};
`
export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
