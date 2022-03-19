import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-right: 12px;
  position: relative;
`
export const Avatar = styled(Img)`
  ${css.size(200)};
  border-radius: 86px;
  margin-left: -5px;
  border: 4px solid;
  border-color: #0a313e;
`
export const QuoteAvatar = styled(Avatar)`
  ${css.size(200)};
  border-radius: 86px;
  border-color: ${theme('avatar.quote')};
`
