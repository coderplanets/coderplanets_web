import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

// see https://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container
export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  width: 100%;
  margin-top: 15px;
`
export const HeaderWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  cursor: pointer;
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const TocIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  margin-top: -1px;

  ${HeaderWrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const TocTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 5px;

  ${HeaderWrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: all 0.25s;
`
const MenuIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  transform: rotate(90deg);

  ${HeaderWrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const MenuClosedIcon = styled(MenuIcon)`
  margin-top: -3px;
  opacity: 0.6;
`
export const MenuOpenedIcon = styled(MenuIcon)`
  ${css.size(13)};
  margin-top: -2px;
  opacity: 0.8;
`
export const TocContentWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  border-top: 1px solid;
  border-top-color: #05424f;
  padding: 10px 0;
  font-size: 12px;
  margin-top: 8px;
  width: 100%;
`
