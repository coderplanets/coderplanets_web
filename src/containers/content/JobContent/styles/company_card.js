import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  min-height: 140px;
  padding: 20px;
  max-width: 300px;
  width: 100%;
  background: ${theme('drawer.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
  ${css.media.mobile`
    width: 100%;
  `};
`
export const CompanyBrand = styled.div`
  ${css.flex()};
`
export const CompanyLogo = styled(Img)`
  ${css.size(40)};
  margin-right: 12px;
`
export const CompanyLabel = styled.div`
  ${css.flexColumn()};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const HomePage = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  margin-right: 5px;
`
export const Link = styled.a`
  transition: color 0.3s;
  color: ${theme('markdown.link')};

  &:hover {
    cursor: pointer;
    color: ${theme('markdown.link')};
    text-decoration: underline;
  }
`
export const CompanyStates = styled.div`
  ${css.flexColumn()};
`
export const StateLabel = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
  margin-left: 5px;
`
export const StateIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  margin-right: 15px;
`
export const StateText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
  margin-top: 1px;
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  margin-top: 14px;
  margin-bottom: 15px;
`
