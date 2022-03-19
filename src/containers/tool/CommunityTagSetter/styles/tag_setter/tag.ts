import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'
import HashTagSVG from '@/icons/HashTag'

export const Wrapper = styled.div`
  width: auto;
  height: 30px;
  background: ${theme('modal.bg')};
  ${css.flex('align-center')};
  margin-bottom: 15px;
  margin-right: 10px;
  border: 1px solid;
  border-color: transparent;
  border-radius: 10px;
  padding: 3px 10px;
  padding-top: 2px;
  padding-right: 2px;

  &:hover {
    cursor: pointer;
    border-color: #0c516e;
  }
`
export const HashTag = styled(HashTagSVG)<{ color: string }>`
  ${css.size(12)};
  fill: ${({ color }) => color};
  margin-right: 5px;
  transform: rotate(18deg);
  filter: saturate(0.6);
  opacity: 0.8;
`
export const Name = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const CheckWrapper = styled.div`
  margin-left: 12px;
`
export const RemoveIcon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('baseColor.red')};
  opacity: 0.8;
  margin-left: 10px;
  margin-right: 4px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
