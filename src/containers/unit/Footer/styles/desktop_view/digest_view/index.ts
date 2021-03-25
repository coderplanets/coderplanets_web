import styled from 'styled-components'

import { theme, css } from '@/utils'

import CommunityFaceLogo from '@/components/CommunityFaceLogo'
import { ArrowLink } from '@/components/Buttons'

// import { getPadding } from '../../metrics'

export const Wrapper = styled.footer<{ metric: string }>`
  ${css.flexColumn('align-center')};
  width: 100%;
  margin-top: 30px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const InnerWrapper = styled.div`
  width: 100%;
  padding-bottom: 0;
`
export const TopBarInfos = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 30px;
  padding-bottom: 35px;
  border-bottom: 1px solid;
  border-bottom-color: #003949;
`
export const MainInfos = styled.div`
  ${css.flex('justify-between')};
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: 12px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;

  ${css.media.tablet`display: none;`};
`
export const Column = styled.div<{ margin?: string }>`
  ${css.flexColumn()};
  min-width: 100px;
  margin-right: ${({ margin }) => margin || '50px'};
`
export const MainColumn = styled.div`
  ${css.flex('align-center')};
  min-width: 240px;
  flex-grow: 1;
`
export const SiteInfo = styled.div`
  ${css.flex('align-center')};
  margin-top: 3px;
`
export const SiteLogo = styled(CommunityFaceLogo)`
  ${css.size(22)};
  margin-right: 12px;
  margin-top: -5px;
  margin-left: 2px;
`
export const SiteTitle = styled.div`
  color: #007fa8;
  font-size: 18px;
  font-weight: bold;
  margin-right: 25px;
`
export const SiteDesc = styled.a`
  color: ${theme('footer.title')};
  display: block;
  text-decoration: none;
  margin-left: 24px;
  opacity: 0.8;

  font-size: 14px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
export const Title = styled.div`
  color: ${theme('footer.title')};
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`
export const Body = styled.div`
  ${css.flexColumn('justify-start')};
  color: ${theme('footer.text')};
`
type TItem = { normal: boolean; offsetTop?: string }
export const Item = styled.a<TItem>`
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
