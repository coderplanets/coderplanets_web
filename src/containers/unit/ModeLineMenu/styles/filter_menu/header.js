import styled from 'styled-components'

// import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('justify-between')};
  width: 100%;
  /* border-bottom: 1px solid;
  border-bottom-color: #183d54; */
  padding-bottom: 10px;
  margin-bottom: 0;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  padding-left: 8px;
`
export const ButtonsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const ConfirmBtn = styled.div`
  margin-top: -2px;
`
export const ResetBtn = styled.div`
  color: #107eae;
  font-size: 13px;
`
