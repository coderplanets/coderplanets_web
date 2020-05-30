import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-left: 8px;
`
export const CellsWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-bottom: 25px;
  margin-left: 15px;
`
export const DatesWrapper = styled.div`
  position: relative;
  ${cs.flex()}
  flex-wrap: wrap;
  width: 100%;
`
