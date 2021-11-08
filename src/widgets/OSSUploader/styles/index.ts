import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import UploadIcon from '@/icons/ImgUpload'

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`
export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
export const Label = styled.label`
  display: block;
  cursor: pointer;

  ${Wrapper}:hover & {
    filter: blur(4px);
  }
  transition: all 0.1s;
`
export const HintIcon = styled(UploadIcon)`
  opacity: 0;
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  fill: ${theme('thread.articleTitle')};
  ${css.size(24)};

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
