import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const SettingWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 30px;
  margin-top: 5px;
`
export const SettingIcon = styled(Img)`
  ${css.size(16)};
  fill: ${theme('button.primary')};
  margin-left: 5px;
`
