import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-left: 8px;
`
export const CellsWrapper = styled.div`
  ${css.flexColumn('align-center')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-bottom: 25px;
  margin-left: 15px;
`
export const DatesWrapper = styled.div`
  position: relative;
  ${css.flex()}
  flex-wrap: wrap;
  width: 100%;
`
