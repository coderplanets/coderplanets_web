import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import WorksHolderSVG from '@/icons/WorksHolder'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-start')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  padding: 0 10px;
  margin-bottom: 20px;
`
export const RealCover = styled(Img)`
  ${css.size(70)};
  border-radius: 6px;
`
export const HolderWrapper = styled.div`
  ${css.size(70)};
  ${css.flex('align-both')};
  border-radius: 6px;
  background-color: #03343f;
`
export const HolderIcon = styled(WorksHolderSVG)`
  ${css.size(48)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.3;
  transform: rotate(90deg);

  ${HolderWrapper}:hover & {
    opacity: 0;
  }
  transition: all 0.2s;
`
export const Section = styled.section`
  margin-left: 20px;
`
export const Title = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 8px;
`
