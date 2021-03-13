import styled from 'styled-components'

import { TTestable } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-start')};
  width: auto;
  height: 100%;
  margin-top: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0.5;
`
export const Divider = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background: #003541;
`
