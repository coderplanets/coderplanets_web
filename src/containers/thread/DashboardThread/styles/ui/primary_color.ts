import styled from 'styled-components'

import { BaseSection } from '.'

import css, { theme } from '@/utils/css'

export const Wrapper = styled(BaseSection)``

export const Label = styled.div`
  ${css.flex('align-both')};
  width: 100px;
  height: 32px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${theme('thread.articleDigest')};
`
export const TheColor = styled.div`
  width: 92px;
  height: 22px;
  border-radius: 6px;
  background: ${theme('thread.articleTitle')};
`
