import styled from 'styled-components'

import type { TColorName } from '@/spec'

import { COLORS } from '@/constant'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Label = styled.div<{ color: TColorName }>`
  ${css.circle(28)};
  ${css.flex('align-both')};
  border: 1px solid;
  border-color: ${({ color }) => COLORS[color]};
  cursor: pointer;
  margin-left: -2px;
`
export const TheColor = styled.div<{ color: TColorName }>`
  ${css.circle(20)};
  background-color: ${({ color }) => COLORS[color]};
`

// threads
export const ThreadsWrapper = styled.div`
  ${css.flex('justify-between')};
  flex-wrap: wrap;

  border: 1px solid;
  border-color: ${theme('border')};
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 24px;
  padding: 10px 14px;
  padding-right: 0;
`
export const Section = styled.div`
  width: 48%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 44px;
  margin-bottom: 15px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const ThreadTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: 13px;
  width: 75%;
`
