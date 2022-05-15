import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  width: 300px;
  height: auto;
  border-left: 1px solid;
  border-left-color: ${theme('border')};
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 0;
  margin-top: 19px;
  margin-left: 60px;
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
  font-weight: 400;
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
  border: 1px solid;
  border-color: ${theme('thread.extraInfo')};
  color: ${theme('thread.extraInfo')};
  font-weight: 600;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 11px;
  margin-left: -1px;
  margin-right: 8px;
  cursor: pointer;
`
