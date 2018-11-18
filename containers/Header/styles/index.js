import styled from 'styled-components'

// import Img from '../../../components/Img'
// import { theme, cs } from '../../../utils'

export const AffixHeader = styled.div`
  display: ${({ fixed }) => (fixed ? 'block' : 'none')};
`
export const RawHeader = styled.div`
  display: ${({ fixed }) => (!fixed ? 'block' : 'none')};
`
