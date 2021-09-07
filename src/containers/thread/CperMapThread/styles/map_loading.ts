import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import GeoMapSVG from '@/icons/GeoMap'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  min-height: 400px;
  padding-top: 120px;
  margin-left: -100px;
`
export const LoadingIcon = styled(GeoMapSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(120)};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  margin-top: 15px;
`
