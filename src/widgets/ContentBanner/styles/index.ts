import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const BaseBanner = styled.nav`
  ${css.flexColumn('justify-center')};

  position: relative;
  min-height: 108px;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};

  ${css.media.mobile`
    min-height: 100px;
  `};
`
export const BaseBannerContent = styled.div`
  ${css.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
export const BannerContainer = styled(BaseBanner)`
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  ${css.flex()};
`
export const PostBrief = styled.div`
  ${css.flexColumnGrow()};
  width: 60%;
`

export const Title = styled.div`
  font-size: 1.5em;
  color: ${theme('thread.articleTitle')};

  ${css.cutRest('100%')};
`
export const Desc = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${css.circle(25)};
  margin-right: 5px;
`
export const MarkTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${theme('baseColor.red')};
  color: ${theme('baseColor.red')};
  margin-right: 8px;
`
