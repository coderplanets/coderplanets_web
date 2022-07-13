import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  position: relative;
  min-height: 80px;
  width: 100%;
  background: ${theme('hoverBg')};
  padding: 15px;
  padding-right: 60px;
`
export const CopyBtnWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 12px;
`
