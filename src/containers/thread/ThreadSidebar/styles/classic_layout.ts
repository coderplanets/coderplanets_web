import styled from 'styled-components'

import type { TActive, TTestable } from '@/spec'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  min-width: 200px;
  max-width: 200px;
  padding-top: 15px;

  ${css.media.tablet`display: none;`};
`
export const PublishWrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 160px;
  max-width: 180px;
  margin-left: 16px;
`
export const BadgeWrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-left: 18px;
`
export const TagsBarWrapper = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  max-width: 160px;
`
