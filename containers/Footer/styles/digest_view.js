import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.footer`
  ${cs.flex('justify-start')};
  margin-left: 8%;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 30px;

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.3s;
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
export const SiteDesc = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 5px;
`

export const SiteLogo = styled(Img)`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 8px;
`
export const SiteTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
`

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 12px;
  font-size: 0.9rem;
`

export const Body = styled.div`
  ${cs.flexColumn('justify-start')};
  color: ${theme('thread.articleDigest')};
`

export const Item = styled.div`
  font-size: 0.8rem;
  margin-bottom: 8px;
  margin-top: ${({ offsetTop }) => offsetTop || '0'};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`

export const ItemGitSource = styled.div`
  ${cs.flex('align-center')};
`
