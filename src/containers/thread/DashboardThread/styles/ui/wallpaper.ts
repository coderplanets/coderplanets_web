import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import SettingSVG from '@/icons/Setting'
import { BaseSection } from '.'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Section = styled(BaseSection)``

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 12px;
`
export const PreviewWrapper = styled.div`
  ${css.flex('align-center')};
`
export const HoverMask = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const UploadIcon = styled(SettingSVG)`
  position: absolute;
  top: calc(50% - 22px);
  left: calc(50% - 13px);
  ${css.size(25)};
  fill: white;
  opacity: 0;

  ${HoverMask}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
export const PreviewImage = styled.div<{ effect: string }>`
  border: 1px solid;
  border-color: ${theme('border')};
  background-color: ${theme('hoverBg')};

  width: 296px;
  height: 180px;
  border-radius: 8px;
  ${({ effect }) => effect || ''};

  transition: all 0.2s;
`
export const RealPreview = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
`
export const ContentBlock = styled.div`
  position: absolute;
  top: 1px;
  left: 30px;
  width: 240px;
  height: 178px;
  background: white;
  z-index: 2;
  padding: 15px;

  transition: all 0.2s;
`
export const ContentBar = styled.div<{ long: number }>`
  width: ${({ long }) => `${long}%`};
  height: 10px;
  background: ${theme('border')};
  margin-bottom: 10px;
  z-index: 3;
  border-radius: 5px;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 20px;
`
