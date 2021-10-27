import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import CodeSVG from '@/icons/Code'
import DevopsSVG from '@/icons/Devops'
import FrameworkSVG from '@/icons/Framework'
import DesignSVG from '@/icons/Design'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  width: 150px;
  margin-top: 26px;
`
export const CodeIcon = styled(CodeSVG)`
  ${css.size(23)};
  margin-bottom: 4px;
  fill: ${theme('thread.articleDigest')};
  opacity: 0.7;
`
export const DevopsIcon = styled(DevopsSVG)`
  ${css.size(23)};
  margin-bottom: 3px;
  opacity: 0.7;
  fill: ${theme('thread.articleDigest')};
`
export const FrameworkIcon = styled(FrameworkSVG)`
  ${css.size(20)};
  margin-bottom: 8px;
  opacity: 0.7;
  fill: ${theme('thread.articleDigest')};
`
export const DesignIcon = styled(DesignSVG)`
  ${css.size(20)};
  margin-bottom: 8px;
  opacity: 0.7;
  fill: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
`
export const Num = styled.div`
  ${css.flex('align-center')};
  font-size: 12px;
  opacity: 0.9;
  margin-top: -2px;
`
