import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  background: #0f3644;
  border-radius: 8px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  width: calc(100% + 40px);
  height: 55px;
  margin-left: -20px;
  margin-top: -15px;
  padding: 10px 20px;
  padding-left: 30px;

  ${css.media.mobile`
    width: 100%;
    margin: 0;
    padding: 15px;
    height: 45px;
  `};
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
export const Count = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: -2px;
`
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
`
export const SelectLabel = styled.div<TActive>`
  ${css.flex('align-center')};
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  background: ${({ $active }) => ($active ? '#014150' : 'transparent')};
  border-radius: 8px;
  padding: 2px 8px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    background: #014150;
  }
`
export const SubCount = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 4px;
`
