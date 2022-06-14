import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  padding: 0 100px;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn()};
`
export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const LabelBlock = styled.div`
  ${css.flex('align-center')};
  height: 40px;
  width: 100%;
  margin-left: -8px;
  padding: 10px;
  border: 1px solid;
  border-color: ${theme('border')};
  border-radius: 5px;
  margin-bottom: 12px;

  &:hover {
    background: ${theme('hoverBg')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const Dot = styled.div<{ color: string }>`
  ${css.circle(11)};
  background: ${({ color }) => color};
`
export const LabelTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-left: 10px;
`
