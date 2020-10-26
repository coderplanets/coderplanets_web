import styled from 'styled-components'

import { css, theme } from '@/utils'

import Img from '@/Img'
import { Wrapper as CommunityWrapper } from './community_view'

export const Wrapper = styled(CommunityWrapper)`
  box-shadow: none;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start')};
  width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  margin-left: ${css.ARTICLE_CONTENT_OFFSET};
  /* margin-left: 0; */
  height: 33px;
  align-items: center;
`
export const RouterWrapper = styled.div`
  ${css.flex('align-center')};
  height: 100%;
  width: ${css.ARTICLE_CONTENT_WIDTH};
`
export const Operations = styled.div`
  ${css.flex('align-both')};
  width: ${css.ARTICLE_STICKER_WIDTH};
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
