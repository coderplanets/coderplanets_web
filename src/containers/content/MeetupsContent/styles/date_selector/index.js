import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  margin-bottom: 25px;
  color: ${theme('thread.articleDigest')};
`
export const DatesWrapper = styled.div`
  ${cs.flex()}
  flex-wrap: wrap;
  width: 100%;
`
