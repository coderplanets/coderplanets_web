import styled from 'styled-components'

import { css, theme, WIDTH } from '@/utils'

import Img from '@/Img'
import { Wrapper as CommunityWrapper } from './community_view'

export const Wrapper = styled(CommunityWrapper)`
  box-shadow: none;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start')};
  width: ${WIDTH.ARTICLE.PAGE};
  margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET};
  /* margin-left: 0; */
  height: 33px;
  align-items: center;

  ${css.media.laptopL`
    margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET_LAPTOPL};
  `}
`
export const RouterWrapper = styled.div`
  ${css.flex('align-center')};
  height: 100%;
  width: ${WIDTH.ARTICLE.CONTENT};
`
export const Operations = styled.div`
  ${css.flex('align-both')};
  width: ${WIDTH.ARTICLE.STICKER};

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const UserInfoWrapper = styled.div``
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(24)};
  display: block;
  cursor: pointer;
`
