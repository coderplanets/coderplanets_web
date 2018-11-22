import styled from 'styled-components'

import HeaderMailSVG from '../../../components/SvgIcons/HeaderMailSVG'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 8px;
`

export const HeaderMailIcon = styled(HeaderMailSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  margin-top: -2px;
`

export const PannerWrapper = styled.div`
  width: 350px;
  min-height: 300px;
  height: auto;
  padding: 10px;
`
