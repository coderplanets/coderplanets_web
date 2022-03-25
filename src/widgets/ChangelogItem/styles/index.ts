import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-start')};
  padding-top: 12px;
  border-bottom: 1px solid;
  border-bottom-color: #eae9e9; // to-theme
  margin-bottom: 40px;
`
export const Main = styled.div`
  width: 600px;
  min-height: 220px;
  padding-bottom: 30px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const Body = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  line-height: 1.85;
`
export const Side = styled.div`
  ${css.flexColumn('align-end')};
  flex-grow: 1;
  margin-top: 5px;
`
export const DateTime = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Download = styled.div`
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
  margin-top: 4px;
`
