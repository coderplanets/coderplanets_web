import styled from 'styled-components'
import { includes } from 'ramda'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-center')};
  width: 230px;
  padding: 8px 10px;
  padding-top: 12px;
`
export const Item = styled.div<{ name: string }>`
  ${css.flexColumn('align-center', 'justify-center')};
  margin-right: ${({ name }) => (name === 'pill' ? 0 : '15px')};
`
type TEIcon = { name: string } & TActive
export const EIcon = styled(Img)<TEIcon>`
  margin-top: ${({ name }) =>
    includes(name, ['downvote', 'beer']) ? '2px' : 0};
  margin-bottom: ${({ name }) => (name === 'heart' ? '1px' : 0)};
  ${({ name }) => (name === 'confused' ? css.size(21) : css.size(20))};

  filter: ${({ $active }) => ($active ? 'saturate(1)' : 'saturate(0.8)')};
  z-index: 1;

  ${Item}:hover & {
    cursor: pointer;
    filter: saturate(1);
    opacity: 1;
  }
`
export const Name = styled.div<TActive>`
  font-size: 11px;
  margin-top: 7px;
  color: ${({ $active }) =>
    $active ? theme('thread.extraInfo') : theme('thread.articleDigest')};

  ${Item}:hover & {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
  }
`
