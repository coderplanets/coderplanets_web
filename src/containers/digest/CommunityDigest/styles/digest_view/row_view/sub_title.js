import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  width: 100%;
  margin-bottom: 10px;
`
export const Title = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.desc')};
  font-size: 14px;
  font-weight: bold;
`
export const Num = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  background: #054a5e;
  padding: 0 5px;
  border-radius: 6px;
  line-height: 13px;
  margin-left: 5px;
`
export const More = styled.div`
  color: ${theme('banner.desc')};
  font-size: 12px;
  width: 45px;
`
