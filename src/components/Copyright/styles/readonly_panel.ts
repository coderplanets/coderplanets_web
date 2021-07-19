import styled from 'styled-components'
import IconText from '@/components/IconText'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 240px;
  padding: 10px;
  padding-left: 15px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  ${css.size(18)};
  fill: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-left: 8px;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Items = styled.div`
  margin-top: 10px;
  margin-bottom: 6px;
`
export const DescItem = styled(IconText)`
  margin-bottom: 3px;
`
export const Footer = styled.div`
  ${css.flex('align-center')};
`
