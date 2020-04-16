import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-end', 'justify-between')};
  width: 260px;
  height: 100%;
  padding-top: 11px;
  padding-right: 30px;
`
export const Main = styled.div`
  ${cs.flexColumn('align-end', 'justify-between')};
`
export const Title = styled.div`
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  text-align: right;
  margin-top: 8px;
  padding-left: 40px;
`
export const More = styled.div`
  ${cs.flex('align-center')};
  padding-top: 6px;
  border-top: 1px solid #034250;
`
