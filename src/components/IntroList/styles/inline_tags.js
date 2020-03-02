import styled from 'styled-components'

// import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
  min-height: 64px;
`
export const Tag = styled.div`
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #0c465a;
  padding: 0 5px;
  border-radius: 6px;
  color: #7c979c;
  background: #0b3e50;
  font-size: 13px;
  height: 21px;
`
