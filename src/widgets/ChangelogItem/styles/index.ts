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
  font-weight: 580;
  margin-bottom: 10px;
`
export const TagsWrapper = styled.div`
  margin-bottom: 10px;
  margin-left: -6px;
`
export const Body = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  line-height: 1.85;
`
export const Side = styled.div`
  ${css.flexColumn('align-end')};
  color: ${theme('thread.extraInfo')};
  flex-grow: 1;
  margin-top: 5px;
`
export const DateTime = styled.div`
  font-size: 12px;
`
export const Version = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 2px;
`
export const Download = styled.div`
  font-size: 12px;
  margin-top: 4px;
`
