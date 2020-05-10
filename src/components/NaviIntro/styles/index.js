import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
  margin-bottom: 15px;
  padding-bottom: 18px;
  border-bottom: 1px solid;
  border-bottom-color: #054351;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 30px;
  height: 30px;
  display: block;
`
export const Digest = styled.div`
  ${cs.flexColumn('align-start')};
  margin-left: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
