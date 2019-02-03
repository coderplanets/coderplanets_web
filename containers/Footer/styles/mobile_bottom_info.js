import styled from 'styled-components'

import { theme, cs } from 'utils'

export const MainInfoWrapper = styled.div`
  ${cs.flex('align-center')};
  height: 50px;
  padding-left: 6%;
  padding-right: 6%;
  display: none;
  ${cs.media.mobile`display: flex;`};
`

export const Item = styled.a`
  color: ${theme('footer.text')};
  font-size: 0.9rem;
  text-decoration: underline;
`

export const BannerWrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
  background: ${theme('footer.bottomBg')};
  height: 80px;
  width: 100%;
  display: none;
  ${cs.media.mobile`display: flex;`};
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
