import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  background: #003b4a;
  width: 350px;
  height: 80vh;
  padding: 10px;
  margin-right: 15px;
`
export const Header = styled.div`
  margin-bottom: 30px;
`
export const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #455f11;
  padding: 2px 12px;
  padding-left: 15px;
  color: #92a4a5;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  ${Wrapper}:hover & {
    font-weight: bold;
  }
  transition: all 0.2s;
`
export const Item = styled.div`
  ${css.flex()};
  margin-bottom: 18px;
`
