import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-start', 'justify-between')};
  width: 100%;
  min-height: 500px;
  padding: 10px 25px;
  padding-top: 40px;
`
export const Column = styled.div`
  ${css.flexColumn('align-start')};
  width: 29%;
  min-height: 70vh;
  /* border: 1px solid; */
  /* border-color: ${theme('thread.extraInfo')}; */
`
export const Header = styled.div`
  border-bottom: 2px solid;
  border-bottom-color: #d3d5d7;
  padding-bottom: 22px;
  width: 100%;
`
export const Title = styled.div`
  ${css.flex('align-center')};
`
export const SubTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 13px;
  margin-top: 4px;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
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
