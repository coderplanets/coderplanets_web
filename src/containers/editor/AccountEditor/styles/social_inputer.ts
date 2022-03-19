import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import FormInput from '@/widgets/Input'

import MailSVG from '@/icons/Mail'
import TwitterSVG from '@/icons/Twitter'
import BlogSVG from '@/icons/Blog'
import GithubSVG from '@/icons/Github8'
import CitySVG from '@/icons/City'
import CompanySVG from '@/icons/Company'

export const Input = styled(FormInput)`
  text-align: left;
  padding: 5px 5px;
  padding-left: 12px;
  height: 36px;
  width: 245px;
  font-size: 15px;
`
export const Section = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 20px;
  width: 100%;
  margin-left: 12px;
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
  margin-left: 1px;
  margin-right: 11px;
  margin-top: 1px;
  fill: ${theme('thread.articleDigest')};
`
export const GithubIcon = styled(GithubSVG)`
  ${iconBase};
  ${css.size(15)};
  margin-right: 11px;
  fill: ${theme('thread.articleDigest')};
`
export const TwitterIcon = styled(TwitterSVG)`
  ${iconBase};
  ${css.size(14)};
  margin-right: 11px;
  fill: ${theme('thread.articleDigest')};
`
export const BlogIcon = styled(BlogSVG)`
  ${iconBase};
  fill: ${theme('thread.articleDigest')};
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
