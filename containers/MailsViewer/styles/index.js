import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};

  padding: 20px;
  background: ${theme('preview.articleBg')};
  min-height: 600px;
  margin-top: 25px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`

export const Title = styled.div``

export const OptionToggleIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 20px;
  height: 20px;
`
