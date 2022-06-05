import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-bottom: 25px;
  margin-right: 30px;
`
export const RateWrapper = styled.div`
  flex-grow: 1;
`
// reactions
export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 14px;
`
export const BoxWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
`
export const UsefulIcon = styled(Img)`
  ${css.size(15)};
  margin-right: 10px;
  filter: grayscale(0.4);
`
export const Button = styled.span`
  ${css.flex('align-both')};
  height: 28px;
  padding: 3px 12px;
  background: #0e3846;
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
`
export const UsefulText = styled.span`
  color: ${theme('banner.desc')};

  ${Button}:hover & {
    color: ${theme('banner.title')};
  }
  transition: color 0.25s;
`
export const UselessWrapper = styled.div`
  ${css.flex('align-center')};
  height: 28px;
`
export const UselessButton = styled(Button)<TActive>`
  margin-right: 8px;
  background: ${({ active }) => (active ? '#423836' : '#0e3846')};
`
export const CryIcon = styled(Img)<TActive>`
  fill: ${({ active }) =>
    active ? theme('baseColor.red') : theme('banner.desc')};
  ${css.size(15)};

  ${UselessButton}:hover & {
    fill: ${theme('banner.title')};
  }

  transition: fill 0.25s;
`
export const UselessText = styled.span`
  opacity: 0;

  ${UselessWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.25s ease-in-out;
`

export const ShareWrapper = styled.div`
  ${css.flexColumn('justify-end')};
`
export const ShareList = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 6px;
`
export const ShareIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(16)};
  margin-left: 12px;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
