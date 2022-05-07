import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'
import MoreSVG from '@/icons/menu/More'

import { Divider } from '@/widgets/Common'

export const Wrapper = styled.div`
  ${css.flex('align-start')}
  width: 100%;
  padding-top: 20px;
`
export const BackWrapper = styled.div`
  width: 240px;
  min-width: 240px;
  height: 100%;
  margin-right: 15px;
`
export const MobileBackWrapper = styled.div`
  width: 50px;
  height: 100%;
`
export const BackHeader = styled.div`
  ${css.flex('align-center')};
  padding-left: 38px;
  margin-top: 60px;
`
export const LineDivider = styled(Divider)``

export const Note = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  padding: 0 15px;
  line-height: 1.8;
`
export const Content = styled.div`
  ${css.flex('align-center')}
  flex-wrap: wrap;
`
export const Block = styled.div<TActive>`
  ${css.flexColumn('align-center', 'justify-between')}
  color: #708b96;
  width: 240px;
  height: 120px;
  border-radius: 4px;
  margin-left: 25px;
  margin-bottom: 30px;

  border: ${({ active }) =>
    active ? '1px solid #327faf;' : '1px solid #31576f;'};
  box-shadow: ${({ active }) =>
    active ? '0px 7px 20px 10px rgba(0, 0, 0, 0.15);' : 'none'};

  &:hover {
    cursor: pointer;
    border: 1px solid #327faf;
    box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15); /* same with the popover */
  }
  transition: all 0.2s;
`

export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')}
  padding: 0 10px;
  height: 40px;
  width: 100%;
  background-color: #043b49;
`
export const Intro = styled.div`
  ${css.flex('align-center')};
  padding-left: 4px;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(14)};
  margin-right: 8px;
  filter: saturate(0.5);
`
export const MoreIcon = styled(MoreSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};

  &:hover {
    fill: ${theme('thread.articleTitle')};
  }
`

export const Body = styled.div`
  ${css.flexColumn('justify-center')};
  width: 100%;
  height: 100%;
  padding: 0 14px;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const Desc = styled.div`
  ${css.lineClamp(2)}
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 13px;
  margin-top: 5px;
`
