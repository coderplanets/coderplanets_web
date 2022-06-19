import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const AvatarWrapper = styled.div`
  ${css.flexColumn('align-both')};
  width: 60px;
`
export const Avatar = styled(Img)`
  ${css.circle(28)};
`
export const UpvoteWrapper = styled.div`
  margin-top: 13px;
  margin-left: 8px;
`

export const Main = styled.div`
  ${css.flexColumnGrow()};
  margin-left: 16px;
`
