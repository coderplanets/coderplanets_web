import styled from 'styled-components'

// import Img from '@/Img'
import DotDivider from '@/components/DotDivider'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  min-height: 80px;
  background: ${theme('baseColor.redBg')};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 50px;
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Dot = styled(DotDivider)`
  background-color: ${theme('baseColor.red')};
  margin-left: 0;
`
export const Title = styled.div`
  color: ${theme('baseColor.red')};
`
export const Desc = styled.div`
  color: ${theme('baseColor.red')};
  opacity: 0.7;
  margin-left: 10px;
`
