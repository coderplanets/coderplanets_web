import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'
import RocketSVG from '@/icons/PublishRocket'

export const Wrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const Title = styled.div`
  letter-spacing: 2px;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 1px;
`
export const RocketIcon = styled(RocketSVG)`
  ${css.size(16)};
  fill: ${theme('button.fg')};
`
