import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: 10px;
  color: ${theme('banner.desc')};
  flex-wrap: wrap;
`
export const CommunityPopinfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
export const CommunityIcon = styled(Img)`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 4px;
  margin-bottom: 10px;
  ${cs.smokey};
`
export const Text = styled.div`
  font-size: 0.9rem;
  margin-top: 1px;
  color: ${theme('thread.articleDigest')};
  margin-left: 3px;
`
export const MoreText = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  margin-top: -5px;
`
