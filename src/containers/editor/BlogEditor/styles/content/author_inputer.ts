import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  /* ${css.flexColumn('align-center')}; */
  width: calc(100% - 40px);
  min-height: 30vh;
  margin-left: 8px;
  margin-bottom: 30px;
`
export const Hint = styled.div`
  font-size: 13px;
  border-bottom: 1px solid;
  border-bottom-color: #02404e;
  color: ${theme('thread.articleDigest')};
  margin-top: 60px;
  margin-bottom: 30px;
  padding-bottom: 20px;
`
export const InputerWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 20px;
  width: 360px;
`
export const InputMask = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleDigest')};
  margin-right: 10px;
`
export const Inputer = styled(Input)`
  width: 100%;
  color: ${theme('thread.articleTitle')};
  display: block;
  border: 1px solid;
  border-color: #006279;
  border-radius: 10px;
  background: #05222b;
  padding-left: 12px;
  height: 36px;
  font-size: 15px;

  &::placeholder {
    font-size: 14px;
    color: ${theme('thread.articleTitle')};
    opacity: 0.6;
  }
`
