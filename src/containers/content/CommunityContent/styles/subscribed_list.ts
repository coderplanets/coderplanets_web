import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  width: 200px;
  margin-top: 10px;
  margin-right: 20px;
  height: 400px;
  color: #5b7b81;
  padding-top: 10px;
  padding-left: 10px;
`
export const SubTitle = styled.div`
  font-size: 15px;
`
export const ItemDivider = styled.div`
  width: 80px;
  height: 1px;
  background: #004757;
  margin-top: 8px;
  margin-bottom: 10px;
`
export const SubItem = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const SubIcon = styled(Img)`
  ${css.size(18)};
  border-radius: 5px;
  margin-right: 7px;
  filter: saturate(0.5);
`
