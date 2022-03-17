import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const Label = styled.div`
  color: #3871e0;
  background: #edf3ff;
  padding: 1px 5px;
  font-weight: 500;
  border-radius: 5px;

  // with GTD status
  /* border: 1px solid; */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  /* border-color: #a0bbf2; */
  border-left: none;
`
export const IconWrapper = styled.div`
  ${css.size(19)};
  ${css.flex('align-both')};
  background-color: #3871e0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`
export const WipIcon = styled(GtdWipSVG)`
  ${css.size(9)};
  fill: white;
  /* fill: #3871e0; */
`
export const DoneIcon = styled(GtdDoneSVG)`
  ${css.size(10)};
  fill: white;
  /* fill: #3871e0; */
`
export const TODOIcon = styled(GtdTodoSVG)`
  ${css.size(10)};
  fill: white;
  /* fill: #3871e0; */
`
