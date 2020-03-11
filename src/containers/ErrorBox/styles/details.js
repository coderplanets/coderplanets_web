import styled from 'styled-components'

// import Img from '@Img'
import DotDivider from '@components/DotDivider'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow()};
  min-height: 80px;
  background: ${theme('baseColor.errorBg')};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 50px;
`
export const TitleWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const Dot = styled(DotDivider)`
  background-color: ${theme('baseColor.error')};
  margin-left: 0;
`
export const Title = styled.div`
  color: ${theme('baseColor.error')};
`
export const Desc = styled.div`
  color: ${theme('baseColor.error')};
  opacity: 0.7;
  margin-left: 10px;
`
