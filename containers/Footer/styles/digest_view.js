import styled from 'styled-components'

import CommunityFaceLogo from '@components/CommunityFaceLogo'
import { theme, cs } from '@utils'

export const Wrapper = styled.footer`
  ${cs.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 4vw;

  ${cs.media.desktop`
    padding: 0 5vw;
  `};
`
export const MainInfos = styled.div`
  ${cs.flex('justify-start')};
  margin-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 30px;

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.3s;

  ${cs.media.tablet`display: none;`};
`

export const Column = styled.div`
  ${cs.flexColumn()};
  min-width: 170px;
`
export const MainColumn = styled(Column)`
  min-width: 240px;
`
export const SiteInfo = styled.div`
  ${cs.flex()};
  align-items: end;
  margin-bottom: 10px;
`
export const SiteDesc = styled.a`
  margin-bottom: 5px;
  color: ${theme('footer.text')};
  display: block;

  font-size: 0.8rem;
  margin-bottom: 5px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
  }
  transition: color 0.2s;
`

export const SiteLogo = styled(CommunityFaceLogo)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`
export const SiteTitle = styled.div`
  color: ${theme('footer.title')};
  font-size: 1rem;
`

export const Title = styled.div`
  color: ${theme('footer.title')};
  margin-bottom: 12px;
  font-size: 0.9rem;
`

export const Body = styled.div`
  ${cs.flexColumn('justify-start')};
  color: ${theme('footer.text')};
`

export const Item = styled.a`
  color: ${theme('footer.text')};

  font-size: 0.8rem;
  margin-bottom: 8px;
  margin-top: ${({ offsetTop }) => offsetTop || '0'};

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
  }
  transition: color 0.2s;
`

export const ItemGitSource = styled.div`
  ${cs.flex('align-center')};
`
