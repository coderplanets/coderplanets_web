import styled from 'styled-components'

import { cs, theme, themeSkins } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: 100%;
  color: #6B7F83;
  background: #072d3a;

  /* background: ${theme('thread.bg')}; */
`
export const Header = styled.div`
  ${cs.flex()};
`
// do not use common @Img, because the theme in Img may not work
export const HintIcon = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-right: 15px;
`
export const Title = styled.div`
  font-size: 30px;
  color: ${({ t }) => themeSkins[t].thread.articleTitle};
  padding-bottom: 12px;
`
export const Desc = styled.p`
  color: ${({ t }) => themeSkins[t].baseColor.error};
`
export const UL = styled.ul`
  margin-left: -22px;
  color: ${({ t }) => themeSkins[t].thread.articleDigest};
`
export const Li = styled.li`
  margin-top: 4px;
`
export const Action = styled.span`
  color: ${({ t }) => themeSkins[t].link};
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    text-decoration: ${({ noUnderline }) =>
      noUnderline ? 'none' : 'underline'};
  }
`
export const Footer = styled.div`
  margin-bottom: 26px;
`
