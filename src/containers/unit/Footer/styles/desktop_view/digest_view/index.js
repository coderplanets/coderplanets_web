import styled from 'styled-components'

import { theme, css } from '@/utils'

import CommunityFaceLogo from '@/components/CommunityFaceLogo'
import { ArrowLink } from '@/components/Buttons'

import { getMarginLeft } from '../../metrics'

// import { getPadding } from '../../metrics'

export const Wrapper = styled.footer`
  ${css.flexColumn('align-center')};
  width: 100%;
  margin-top: 30px;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
  margin-left: ${({ metric }) => getMarginLeft(metric)};
`
export const InnerWrapper = styled.div`
  width: 100%;
  padding-bottom: 0;
`
export const MainInfos = styled.div`
  ${css.flex('justify-start')};
  margin-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;

  ${css.media.tablet`display: none;`};
`
export const Column = styled.div`
  ${css.flexColumn()};
  min-width: 100px;
  margin-right: ${({ margin }) => margin || '50px'};
`
export const MainColumn = styled(Column)`
  min-width: 240px;
  flex-grow: 1;
`
export const SiteInfo = styled.div`
  ${css.flex()};
  align-items: end;
  margin-bottom: 10px;
  margin-top: 3px;
`
export const SiteTitle = styled.div`
  margin-bottom: 5px;
  color: ${theme('footer.text')};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const SiteDesc = styled.a`
  margin-bottom: 5px;
  color: ${theme('footer.text')};
  display: block;
  text-decoration: none;

  font-size: 13px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
  }
  transition: color 0.2s;
`
export const SiteLogo = styled(CommunityFaceLogo)`
  ${css.size(32)};
  display: block;
  margin-bottom: 18px;
  margin-left: 3px;
`
export const Title = styled.div`
  color: ${theme('footer.title')};
  margin-bottom: 15px;
  font-size: 14px;
`
export const Body = styled.div`
  ${css.flexColumn('justify-start')};
  color: ${theme('footer.text')};
`
export const Item = styled.a`
  color: ${theme('footer.text')};

  font-size: 14px;
  margin-bottom: 10px;
  margin-top: ${({ offsetTop }) => offsetTop || '0'};
  text-decoration: none;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: ${({ normal }) => (normal ? 'none' : 'underline')};
    cursor: pointer;
  }
  transition: color 0.2s;
`
export const LinkItem = styled(ArrowLink)`
  margin-bottom: 10px;
`
export const ItemGitSource = styled.div`
  ${css.flex('align-center')};
`
