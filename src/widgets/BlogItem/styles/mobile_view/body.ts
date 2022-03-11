import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import LinkSVG from '@/icons/Link'

export const Wrapper = styled.div`
  ${css.flexGrow('align-center')};
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  font-size: 15.5px;
  @media (max-width: 1450px) {
    max-width: 500px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
`
export const TitleLink = styled.div`
  position: relative;
  font-size: 15px;
  margin-top: -1px;
  color: ${theme('thread.articleLink')};
  opacity: 0.8;
  text-decoration: underline;
`
export const LinkIcon = styled(LinkSVG)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  ${css.size(12)};
`
