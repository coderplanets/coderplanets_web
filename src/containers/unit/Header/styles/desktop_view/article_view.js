import styled from 'styled-components'

import { css } from '@/utils'
import { Wrapper as CommunityWrapper } from './community_view'

export { HeaderSearchIcon, Search } from './community_view'

export const Wrapper = styled(CommunityWrapper)`
  box-shadow: none;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-between')};
  width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  margin-left: ${css.ARTICLE_STICKER_WIDTH};
  height: 33px;
  align-items: center;
`
export const RouterWrapper = styled.div`
  ${css.flex('align-center')};
  height: 100%;
  width: ${css.ARTICLE_CONTENT_WIDTH};
  /* LOGO-text width */
  margin-left: -155px;
`
export const Operations = styled.div`
  ${css.flex('align-both')};
  padding-right: 128px;
`
