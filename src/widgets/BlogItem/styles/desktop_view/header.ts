import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Brief = styled.div`
  ${css.flexGrow('align-center')};
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.a`
  font-size: 16px;
  ${css.cutRest('440px')};
  color: ${theme('thread.articleTitle')};
  text-decoration: none;

  &:hover {
    ${css.threadTitleHover()};
  }

  transition: color 0.1s;
`
export const TitleLink = styled.div`
  position: relative;
  font-size: 15px;
  margin-top: -1px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  ${css.size(12)};
`
export const TagListWrapper = styled.div``
