import styled from 'styled-components'

// import Img from '@/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 20px;
  padding: 10px;
`
export const EntriesWrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
`
