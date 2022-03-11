import styled from 'styled-components'

import css, { theme, animate } from '@/utils/css'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'
import LinkSVG from '@/icons/Link'
import GithubSVG from '@/icons/GithubCat'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};

  height: 100vh;
  background: ${theme('banner.bg')};
  border-top: 4px solid;
  border-top-color: ${theme('drawer.topLine')};
`
export const IconsWrapper = styled.div`
  ${css.flex('justify-center')};
`
export const TextWrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 15px;
`
export const HintTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 6px;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
`
// fill: ${theme('font')};
export const HomeLogoIcon = styled(CommunityFaceLogo)`
  ${css.size(48)};
`
export const LinkIcon = styled(LinkSVG)`
  fill: #6e967f;
  width: 23px;
  height: 23px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 16px;
  animation: ${animate.rotate360} 1s linear infinite;
`
export const GithubLogoIcon = styled(GithubSVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(50)};
`
export const HintWrapper = styled.div`
  ${css.flexColumn()};
  color: ${theme('banner.title')};
`
export const FooterWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
`
