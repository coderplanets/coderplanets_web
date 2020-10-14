import styled from 'styled-components'

import { theme, cs } from '@/utils'

const InfoSection = styled.div`
  ${cs.flex('align-both')};
  height: 45px;
  display: none;
  ${cs.media.tablet`display: flex;`};
`
export const LinkInfoWrapper = styled(InfoSection)``
export const SiteInfoWrapper = styled(InfoSection)`
  /* background-color: ${theme('footer.bottomBg')}; */
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
