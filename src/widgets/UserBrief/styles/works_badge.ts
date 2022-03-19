import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  margin-bottom: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 12px;
`
export const List = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const Item = styled.div`
  ${css.flexColumn('align-both')};
  margin-right: 18px;
`
export const Cover = styled(Img)`
  ${css.size(36)};
  border-radius: 5px;
`
