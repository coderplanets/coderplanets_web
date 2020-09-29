import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('align-start')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  min-height: 174px;
`
export const Header = styled.div`
  margin-bottom: 12px;
  margin-top: 8px;
  margin-left: 5px;
`
export const AuthorWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 10px;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Avatar = styled(Img)`
  ${cs.circle('24px')};
  display: block;
`
export const Digest = styled.div`
  ${cs.flexColumn('align-start')};
  margin-left: 10px;
`
export const UserName = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: -2px;
`
