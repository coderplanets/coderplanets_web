import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import HashTagSVG from '@/icons/HashTag'
import SettingSVG from '@/icons/Setting'

import { Wrapper as ParentWrapper } from './index'

export const Wrapper = styled.div`
  position: absolute;
  right: -50px;
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
  opacity: 0;

  ${ParentWrapper}:hover & {
    opacity: 0.8;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`

export const EmptyWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
export const SettingIcon = styled(SettingSVG)`
  ${css.size(11)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.6;
  margin-right: 3px;

  ${Wrapper}:hover & {
    opacity: 0.8;
  }
`

export const HashIcon = styled(HashTagSVG)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
  transform: rotate(18deg);
  opacity: 0.6;
  margin-right: 5px;

  ${Wrapper}:hover & {
    opacity: 0.8;
  }
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
