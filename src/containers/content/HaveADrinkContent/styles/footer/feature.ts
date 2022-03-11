import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import InfoSVG from '@/icons/Info'
import SettingSVG from '@/icons/Setting'
import EditPenSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flex('align-center')}
  width: 20%;
`
const icon = `
  ${css.size(14)};
  opacity: 0.8;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
export const InfoIcon = styled(InfoSVG)`
  fill: ${theme('thread.articleDigest')};
  ${icon};
`
export const SettingIcon = styled(SettingSVG)`
  fill: ${theme('thread.articleDigest')};
  ${icon};
`
export const EditPenIcon = styled(EditPenSVG)`
  fill: ${theme('thread.articleDigest')};
  ${icon};
`
