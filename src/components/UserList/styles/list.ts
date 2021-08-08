import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  padding: 20px;
`
export const UserWrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const Avatar = styled(Img)`
  ${css.circle(32)};
  margin-right: 10px;
  fill: ${theme('button.primary')};
`
export const Intro = styled.div``
export const Name = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('260px')};
`

export const Action = styled.div``
export const RemoveIcon = styled(Img)`
  position: absolute;
  top: 8px;
  right: 0;
  ${css.size(16)};
  fill: ${theme('baseColor.red')};
`
