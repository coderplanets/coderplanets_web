import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import GithubSVG from '@/icons/GithubCat'
import EmailSVG from '@/icons/social/Email'
import WeChatSVG from '@/widgets/Icons/social/WeChat'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Item = styled.div``

const icon = `
  ${css.size(15)};
  fill: ${theme('footer.text')};
  margin-right: 8px;

  &:hover {
    fill: ${theme('footer.hover')};
    cursor: pointer;
  }
`
const Email = styled(EmailSVG)`
  ${icon};
  fill: ${theme('footer.text')};
`
const WeChat = styled(WeChatSVG)`
  ${icon};
  fill: ${theme('footer.text')};
`
const Github = styled(GithubSVG)`
  ${icon};
  fill: ${theme('footer.text')};
`
export const Icon = {
  Email,
  WeChat,
  Github,
}
