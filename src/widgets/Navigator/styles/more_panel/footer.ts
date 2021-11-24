import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

import { Wip } from './index'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  width: 100%;
  min-height: 80px;
  background: #023a48;
  padding: 22px 20px;
  padding-bottom: 2px;
`
export const Entry = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  margin-bottom: 15px;
`
export const Main = styled.a`
  ${css.flex('align-center')};
  text-decoration: none;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};

  ${Main}:hover & {
    fill: #2d7eb1;
    cursor: pointer;
  }
`
export const SupportLogo = styled(Img)`
  ${css.size(19)};
  cursor: pointer;
  filter: saturate(0.7);
  transform: rotate(-18deg);
`

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  font-weight: bold;
  margin-left: 12px;

  ${Main}:hover & {
    color: #2d7eb1;
    text-decoration: underline;
    text-decoration-color: #2d7eb1;
    cursor: pointer;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 10px;
  align-self: flex-end;
`
export const Notice = styled(Wip)`
  background-color: #145b73;
  color: #90b5b7;
  padding: 1px 6px;
  border-radius: 7px;
  border: none;
  margin-top: 2px;
`
