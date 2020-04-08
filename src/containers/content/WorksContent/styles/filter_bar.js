import styled from 'styled-components'

import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 140px;
  margin-right: 25px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bolder;
  margin-bottom: 15px;
  text-align: right;
  margin-right: 6px;
  font-size: 16px;
`
