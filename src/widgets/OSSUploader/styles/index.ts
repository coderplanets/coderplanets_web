import styled from 'styled-components'

import css, { theme, animate } from '@/utils/css'

import UploadIcon from '@/icons/ImgUpload'
import TurboSVG from '@/icons/Turbo'

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
export const Label = styled.label<{ $loading: boolean }>`
  display: block;
  cursor: pointer;

  filter: ${({ $loading }) => ($loading ? 'blur(4px)' : 'none')};

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
export const TurboIcon = styled(TurboSVG)`
  position: absolute;
  ${css.size(30)};
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  fill: ${theme('thread.articleTitle')};
  z-index: 2;

  animation: ${animate.rotate360} 0.5s linear infinite;
`
