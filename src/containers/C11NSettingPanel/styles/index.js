import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('align-start', 'justify-start')};
  width: auto;
  height: 100%;
  padding: 10px;
  margin: 20px;
  margin-top: 10px;
  margin-left: 100px;
  margin-bottom: 120px;
`
export const HeaderTitle = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0.5;
`
export const Divider = styled.div`
  margin: 25px 0;
  width: 100%;
`
