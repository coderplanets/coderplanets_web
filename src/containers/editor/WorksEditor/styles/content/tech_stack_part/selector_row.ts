import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-top: 14px;
  margin-left: -10px;
  margin-bottom: 10px;
  width: 100%;
`
export const Block = styled.div`
  height: 74px;
  width: 76px;
  ${css.flexColumn('align-both')};
`
export const Logo = styled(Img)`
  ${css.size(22)};
  filter: saturate(0.8);
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: 7px;
`
export const AddBlock = styled(Block)`
  margin-top: -2.5px;
`
export const AddButton = styled.div`
  ${css.size(23)};
  ${css.flex('align-both')};
  background: #00343e;
  font-size: 18px;
  color: ${theme('thread.articleDigest')};
  padding-bottom: 2px;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: color 0.1s;
`
