import styled from 'styled-components'

// import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div``

export const MobileWrapper = styled.div`
  ${css.flexColumn('align-both')};
`

export const MediaWrapper = styled.div`
  ${css.flex('align-both')};
  margin-bottom: 30px;
`
export const Title = styled.div`
  ${css.flex('align-end')};
  color: ${theme('thread.extraInfo')};
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
  position: relative;

  &:before {
    content: '//';
    position: absolute;
    opacity: 0.5;
    font-size: 13px;
    top: 2px;
    left: -15px;
  }
`
export const SubTitle = styled.span`
  color: ${theme('thread.extraInfo')};
  opacity: 0.6;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 2px;
`
export const Desc = styled.div`
  color: ${theme('thread.extraInfo')};
  opacity: 0.6;
  font-size: 14px;
  margin-left: 3px;
  margin-top: 6px;
  margin-bottom: 22px;
`
