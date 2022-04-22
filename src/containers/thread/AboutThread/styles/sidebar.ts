import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 300px;
  height: auto;
  /* background: #f1f3f4; */
  border: 1px solid;
  /* border-top: 2px solid; */
  border-color: #eae9e9;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 0;
  margin-top: 12px;
  margin-left: 80px;
`
export const Block = styled.div`
  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  font-weight: 600;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  line-height: 1.6;
`
export const Reports = styled.div`
  ${css.flex('align-center')};
`
export const ReportsArticle = styled(Desc)`
  ${css.lineClamp(1)};
`
export const Press = styled.div`
  /* color: #ec633f; */
  color: ${theme('thread.extraInfo')};
  font-weight: 600;
  font-size: 13px;
  margin-right: 8px;
  cursor: pointer;
`
