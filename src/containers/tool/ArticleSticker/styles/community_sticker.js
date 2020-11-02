import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const ItemWrapper = styled.div`
  ${css.flexColumn('align-both')};
  position: relative;
  width: 80px;
`
const Icon = styled(Img)`
  width: 22px;
  height: 22px;
  display: block;
  transition: all 0.25s;
  cursor: pointer;
`
export const CommunityIcon = styled(Icon)``
export const CommunityTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 8px;
  margin-top: 8px;
`
export const Divider = styled.div`
  width: 50px;
  height: 1px;
  background: #004250;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Number = styled.div`
  ${css.flex('align-baseline')};
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 5px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
`
