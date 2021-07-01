import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  width: 132px;
  min-width: 132px;
  margin-top: 10px;
  margin-right: 20px;
  height: 400px;
  color: #5b7b81;
  padding-top: 10px;
  padding-left: 10px;
`
export const HeadTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`
export const Divider = styled.div`
  width: 80px;
  height: 1px;
  background: #004757;
  margin-top: 8px;
  margin-bottom: 10px;
`
export const Item = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(18)};
  border-radius: 5px;
  margin-right: 7px;
  filter: saturate(0.5);
`
export const Title = styled.div`
  ${css.cutRest('70px')};

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`

export const Option = styled.div``
export const OptionIcon = styled(Img)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  transform: rotate(90deg);
  opacity: 0;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  ${Item}:hover & {
    opacity: 1;
  }
`

export const Menu = styled.div`
  padding: 8px;
  padding-bottom: 2px;
`
export const MenuItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  cursor: pointer;
`
export const MenuIcon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};

  ${MenuItem}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const MenuTitle = styled.div`
  font-size: 13px;
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;

  ${MenuItem}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
