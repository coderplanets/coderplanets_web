import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: 100%;
  padding: 10px 25px;
`
export const ColumnsWrapper = styled.div`
  ${css.flex('align-start', 'justify-between')};
  min-height: 500px;
  margin-top: 60px;
`
export const Column = styled.div`
  ${css.flexColumn('align-start')};
  width: 32%;
  min-height: 70vh;
  /* border: 1px solid; */
  /* border-color: ${theme('thread.extraInfo')}; */
`
export const Header = styled.div`
  ${css.flex('align-center')};
  padding-bottom: 15px;
  width: 100%;
  padding-left: 3px;
`
export const Body = styled.div`
  background: ${theme('hoverBg')};
  padding: 8px;
  border-radius: 6px;
`
export const SubTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 13px;
  margin-left: 6px;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`
export const TODOIcon = styled(GtdTodoSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
`
export const WipIcon = styled(GtdWipSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
`
export const DoneIcon = styled(GtdDoneSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
`
