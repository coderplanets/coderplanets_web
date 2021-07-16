import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  background: #06303b;
  padding: 15px 10px;
  width: 100%;
  min-height: 120px;
  border-radius: 5px;
  margin-left: -5px;
`
export const ItemWrapper = styled.div`
  ${css.flexColumn()};
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-left: 2px;
`
export const Logo = styled(Img)`
  ${css.size(25)};
  border-radius: 5px;
  margin-right: 10px;
  /* TODO: for dark themes */
  filter: saturate(0.8);
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 12px;
`
