import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  overflow: hidden;
  position: absolute;
  top: 20%;
  width: 100%;
  height: 250px;
  border: 1px dashed #327faf;
  background: #043b49;
  opacity: 0.8;
`
export const Holder = styled.div`
  width: 30%;
  height: 100%;
`
