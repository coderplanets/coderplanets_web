import styled from 'styled-components'

import { theme, cs } from '@utils'

const InfoSection = styled.div`
  ${cs.flex('align-both')};
  height: 45px;
  display: none;
  ${cs.media.tablet`display: flex;`};
`
export const LinkInfoWrapper = styled(InfoSection)``
export const SiteInfoWrapper = styled(InfoSection)`
  background-color: ${theme('footer.bottomBg')};
`
export const Item = styled.a`
  color: ${theme('footer.text')};
  font-size: 0.9rem;
  text-decoration: underline;
`
export const ItemBtn = styled.div`
  color: ${theme('footer.text')};
  font-size: 0.9rem;
  border: 1px solid;
  text-decoration: none;
  border-color: ${theme('footer.text')};
  border-radius: 5px;
  padding: 0 4px;
`
export const BannerWrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
  background-color: ${theme('footer.bottomBg')};
  height: 80px;
  width: 100%;
  display: none;
  ${cs.media.tablet`display: flex;`};
`
export const Thanks = styled.div`
  ${cs.flex('align-both')};
  color: ${theme('thread.articleDigest')};
  border: 1px dashed;
  height: 80%;
  width: 100%;
  border-radius: 5px;
`
export const ThxTitle = styled.div``
