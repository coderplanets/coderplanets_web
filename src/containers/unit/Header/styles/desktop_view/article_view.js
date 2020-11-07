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
`
export const RouterWrapper = styled.div`
  ${css.flex('align-center')};
  height: 100%;
  width: ${WIDTH.ARTICLE.CONTENT};
`
export const Operations = styled.div`
  ${css.flex('align-both')};
  width: ${WIDTH.ARTICLE.STICKER};
`
export const UserInfoWrapper = styled.div`
  margin-left: 15px;

  ${css.media.laptopL`
    margin-left: -20px;
  `}
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
`
