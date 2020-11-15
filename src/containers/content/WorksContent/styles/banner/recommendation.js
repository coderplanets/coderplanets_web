import styled from 'styled-components'

import Img from '@/Img'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 42%;
  height: 100%;
`
export const Card = styled.div`
  z-index: 2;
  ${css.flexColumn('justify-between')};
  height: 160px;
  width: 100%;
  padding: 14px 16px;
  background: #08333e;
  margin-bottom: 14px;
  margin-right: 15px;
  border-radius: 5px;

  &:nth-child(even) {
    margin-right: 0;
  }
`
export const IntroWrapper = styled.div`
  ${css.flex('align-center')};
`
export const IntroImg = styled(Img)`
  width: 65px;
  height: 65px;
  display: block;
  border-radius: 5px;
`
export const IntroBlock = styled.div`
  ${css.flexColumnGrow('align-start')};
  margin-left: 20px;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  height: 32px;
`
export const UpInfo = styled.div`
  ${css.flexColumn('align-both')};
  align-self: flex-start;
  margin-top: 5px;
`
export const UpIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
  display: block;
`
export const UpNumber = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
`
export const BodyText = styled.div`
  font-size: 14px;
  ${css.cutFrom('350px')};
  color: ${theme('thread.articleDigest')};
`
export const FooterWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
`
export const BuildWithWrapper = styled.div`
  ${css.flex('align-center')};
`
const BaseBuildIcon = styled(Img)`
  ${css.size(14)};
  display: block;
`
export const TechIcon = styled(BaseBuildIcon)`
  margin-right: 5px;
  filter: saturate(0.8);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`

// export const Card = styled.div`
//   ${css.flexColumn('justify-between')};
//   width: 100%;
//   max-width: 500px;
//   height: 155px;
//   background: #023744;
//   padding: 14px 20px;
//   margin-top: -25px;
// `
// export const IntroWrapper = styled.div`
//   ${css.flex('align-center')};
// `
// export const IntroImg = styled(Img)`
//   width: 65px;
//   height: 65px;
//   display: block;
//   border-radius: 5px;
// `
// export const IntroBlock = styled.div`
//   ${css.flexColumnGrow('align-start')};
//   margin-left: 20px;
// `
// export const Title = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   color: ${theme('thread.articleTitle')};
// `
// export const Desc = styled.div`
//   ${css.flex('align-center')};
//   font-size: 14px;
//   color: ${theme('thread.articleDigest')};
// `
// export const UpInfo = styled.div`
//   ${css.flexColumn('justify-center')};
// `
// export const UpIcon = styled(Img)`
//   fill: ${theme('thread.articleTitle')};
//   width: 20px;
//   height: 20px;
//   display: block;
// `
// export const UpNumber = styled.div`
//   color: ${theme('thread.articleDigest')};
// `
// export const BodyText = styled.div`
//   font-size: 14px;
//   ${css.cutFrom('350px')};
//   color: ${theme('thread.articleDigest')};
// `
// export const FooterWrapper = styled.div`
//   ${css.flex('align-center', 'justify-between')};
//   color: ${theme('thread.articleDigest')};
// `
