import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import MailSVG from '@/icons/Mail'
import TwitterSVG from '@/icons/Twitter'
import BlogSVG from '@/icons/Blog'
import GithubSVG from '@/icons/Github8'
import CitySVG from '@/icons/City'
import CompanySVG from '@/icons/Company'

export const Section = styled.div`
  ${css.flex('align-center')};
  font-size: 13px;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const LinkValue = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  margin-left: 2px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const BlogLink = styled(LinkValue)`
  ${css.cutRest('180px')};
  color: #009395;

  &:hover {
    color: #009395;
  }
`

const iconBase = `
  ${css.size(18)};
  margin-right: 10px;
`

export const CityIcon = styled(CitySVG)`
  ${iconBase};
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 1px;
  margin-right: 11px;
`
export const CompanyIcon = styled(CompanySVG)`
  ${iconBase};
  fill: ${theme('thread.articleDigest')};
`
export const MailIcon = styled(MailSVG)`
  ${iconBase};
  ${css.size(13)};
  margin-left: 3px;
  margin-right: 11px;
  margin-top: 1px;
  fill: ${theme('thread.articleDigest')};
`
export const GithubIcon = styled(GithubSVG)`
  ${iconBase};
  ${css.size(15)};
  margin-left: 2px;
  margin-right: 11px;
  fill: ${theme('thread.articleDigest')};
`
export const TwitterIcon = styled(TwitterSVG)`
  ${iconBase};
  ${css.size(14)};
  margin-left: 3px;
  margin-right: 11px;
  fill: ${theme('thread.articleDigest')};
`
export const BlogIcon = styled(BlogSVG)`
  ${iconBase};
  fill: ${theme('thread.articleDigest')};
  margin-left: 1px;
  margin-right: 9px;
  margin-top: -1px;
`
export const ICON = {
  CityIcon,
  CompanyIcon,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  BlogIcon,
}
