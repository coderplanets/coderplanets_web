import styled from 'styled-components'

// import { Img } from '../../../components'
// import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: -1px;
  flex-wrap: wrap;
  max-width: 80%;
`
export const TagWrapper = styled.div`
  margin-bottom: ${({ margin }) => (margin ? '5px' : 0)};
`
