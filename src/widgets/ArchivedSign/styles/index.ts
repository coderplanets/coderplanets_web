import styled from 'styled-components'

import type { TTestable } from '@/spec'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import ArchivedSVG from '@/icons/Archived'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  border: 1px solid;
  border-color: #00424f;
  padding: 0 8px;
  border-radius: 4px;
  cursor: default;
`
export const SignIcon = styled(ArchivedSVG)`
  ${css.size(12)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 5px;

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
