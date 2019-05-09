import styled from 'styled-components'

// import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 150px;
  padding: 10px;
`
export const BackBtnWrapper = styled.div`
  color: ${theme('banner.title')};
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`
export const BackTitle = styled.span`
  margin-left: 5px;
`
export const Holder = styled.div`
  margin-top: 100px;
`
