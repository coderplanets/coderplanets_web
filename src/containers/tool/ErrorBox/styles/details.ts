import styled from 'styled-components'

// import Img from '@/Img'
import DotDivider from '@/widgets/DotDivider'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  min-height: 130px;
  background: ${theme('baseColor.redBg')};
  filter: ${theme('modal.subPanelShadow')};
  padding: 20px 30px;
  margin-bottom: 20px;
  overflow-y: hidden;
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Dot = styled(DotDivider)`
  background-color: ${theme('baseColor.red')};
  margin-left: 0;
  margin-right: 10px;
`
export const Title = styled.div`
  color: ${theme('baseColor.red')};
`
export const Desc = styled.div`
  color: ${theme('baseColor.red')};
  opacity: 0.7;
  margin-left: 10px;
`
