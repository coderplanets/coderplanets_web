import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.article`
  ${css.flex('justify-start', 'align-center')};
  position: relative;
  width: 43%;
  ${css.cutRest('43%')};
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-right: 12px;
  cursor: pointer;
`
export const Dot = styled.div<{ color: string }>`
  ${css.circle(10)};
  background: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  margin-right: 8px;
  filter: saturate(0.8);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('thread.extraInfo')};

  ${Wrapper}:hover & {
    cursor: pointer;
  }

  transition: all 0.2s;
`
