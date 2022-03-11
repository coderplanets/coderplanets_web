import styled from 'styled-components'

import css, { theme } from '@/utils/css'
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
  opacity: 0.6;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-top: 16px;
  opacity: 0.6;
`
