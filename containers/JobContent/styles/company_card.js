import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  min-height: 140px;
  padding: 20px;
  max-width: 300px;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
`
export const CompanyBrand = styled.div`
  ${cs.flex()};
`
export const CompanyLogo = styled(Img)`
  width: 40px;
  height: 40px;
  display: block;
  margin-right: 12px;
`
export const CompanyLabel = styled.div`
  ${cs.flexColumn()};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const HomePage = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
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
  ${cs.flexColumn()};
`
export const StateLabel = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 10px;
  margin-left: 5px;
`
export const StateIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  margin-right: 15px;
  display: block;
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
