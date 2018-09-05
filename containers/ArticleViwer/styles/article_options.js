import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 15px;
  padding-bottom: 0;
`
export const Item = styled.div`
  color: ${theme('banner.desc')};
  margin-bottom: 8px;

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
