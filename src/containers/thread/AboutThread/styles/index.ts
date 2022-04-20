import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-start')};
  width: 100%;
`
export const MainWrapper = styled.div`
  width: auto;
  min-height: 500px;
  flex-grow: 1;

  background: transparent;
  border-radius: 6px;
  margin-top: 12px;
  padding-left: 25px;
  /* padding-right: 80px; */
  /* border-right: 1px solid #eae9e9; */
`
export const Block = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid;
  border-bottom-color: #eae9e9; // to-theme
  width: 600px;
`
export const BottomBlock = styled(Block)`
  border-bottom: none;
`

export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  font-weight: 600;
  margin-bottom: 15px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  line-height: 1.6;
`
