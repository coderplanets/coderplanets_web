import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  min-height: 100px;
  padding: 0 25px;
`
export const Block = styled.div`
  width: 40%;
  margin-top: 20px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const Desc = styled.div`
  ${cs.flex()};
  margin-top: 10px;
  margin-bottom: 10px;

  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex-wrap: wrap;
`
export const Divider = styled.div`
  min-height: 50%;
  width: 1px;
  margin-left: 5%;
  margin-right: 10%;
  background-color: ${theme('preview.sideDivider')};
`
export const NoMoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
