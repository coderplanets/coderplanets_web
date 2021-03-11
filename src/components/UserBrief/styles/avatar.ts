import styled from 'styled-components'

// import { VIEW } from '@/constant'
import { css, theme } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-right: 12px;
  position: relative;
`
export const InnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: -4px;
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 100%;
  box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 50%) inset;
  z-index: 2;
`
export const Avatar = styled(Img)`
  ${css.circle(200)};
  display: block;
  margin-left: -5px;
`
export const QuoteAvatar = styled(Avatar)`
  ${css.size(200)};
  border-radius: 68px;
  border: 5px solid;
  border-color: ${theme('avatar.quote')};
`
export const QuoteShadow = styled(InnerShadow)`
  top: 5px;
  left: 0;
  ${css.size(190)};
  border-radius: 63px;
`
// export const Avatar = styled(Img)`
//   border-radius: 4px;
//   width: ${({ view }) => (view === VIEW.DESKTOP ? '120px' : '80px')};
//   height: ${({ view }) => (view === VIEW.DESKTOP ? '120px' : '80px')};
//   margin-top: 6px;
//   margin-bottom: 8px;
//   cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
// `
