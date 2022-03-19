import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import GithubSVG from '@/icons/GithubCat'
import EmailSVG from '@/icons/social/Email'
import VipSVG from '@/icons/menu/Vip'
import SponsorSVG from '@/icons/menu/Sponsor'
import VolunteerSVG from '@/icons/menu/Volunteer'
import LinkSVG from '@/icons/Link'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  flex-wrap: wrap;
  margin-left: 20px;
  max-width: 800px;
`
export const Block = styled.a`
  width: 300px;
  height: 150px;
  border: 1px solid;
  text-decoration: none;
  border-color: #004b5e;
  border-radius: 8px;
  margin-right: 28px;
  background: #003845;
  border-radius: 5px;
  margin-bottom: 28px;
  padding: 15px;

  &:hover {
    cursor: pointer;
    background: #0d3b49;
    border-color: ${theme('button.primary')};
  }

  transition: all 0.1s;
`
export const Title = styled.div`
  ${css.flex('justify-between', 'align-center')}
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
const icon = `
  ${css.size(18)};
  margin-right: 10px;
  fill: ${theme('thread.articleDigest')};
`

const Github = styled(GithubSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
const Email = styled(EmailSVG)`
  ${css.size(14)};
  margin-right: 4px;
  fill: ${theme('thread.articleDigest')};
`
const VIP = styled(VipSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
const Volunteer = styled(VolunteerSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
const Sponsor = styled(SponsorSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
export const Icon = {
  Github,
  Email,
  VIP,
  Volunteer,
  Sponsor,
}

export const LinkIcon = styled(LinkSVG)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};
`
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #004b5d;
  margin-top: 10px;
  margin-bottom: 15px;
  opacity: 0.5;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  line-height: 1.85;
`
