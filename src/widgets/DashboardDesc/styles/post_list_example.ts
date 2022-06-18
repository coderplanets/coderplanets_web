import styled from 'styled-components'

// import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div``

export const MediaWrapper = styled.div`
  ${css.flex('align-both')};
  margin-bottom: 30px;
`
export const Title = styled.div`
  ${css.flex('align-end')};
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
`
export const SubTitle = styled.span`
  color: ${theme('lightText')};
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 2px;
`
export const Desc = styled.div`
  color: ${theme('lightText')};
  font-size: 14px;
  margin-left: 3px;
  margin-top: 6px;
  margin-bottom: 22px;
`
export const DividerLine = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background: ${theme('border')};
`
