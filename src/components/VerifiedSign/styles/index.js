import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
  margin-left: 14px;
`
export const Icon = styled(Img)`
  fill: ${theme('baseColor.green')};
  display: block;
  border-radius: 50%;
  padding: 0;
  margin-right: 4px;
  width: 10px;
  height: 10px;
`
export const Text = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 11px;
`
