import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  /* ${css.flexColumn('align-center')}; */
  width: calc(100% - 30px);
  min-height: 30vh;
  margin-left: 10px;
  margin-top: -4px;
`
export const Inputer = styled(Input)`
  width: calc(100% - 20px);
  color: ${theme('thread.articleTitle')};
  display: block;
  border: 1px solid;
  border-color: #006279;
  border-radius: 10px;
  background: #05222b;
  padding-left: 12px;
  height: 42px;
  font-size: 16px;

  &::placeholder {
    font-size: 15px;
    color: ${theme('thread.articleTitle')};
    opacity: 0.6;
  }
`
export const Hint = styled.div`
  font-size: 13px;
  border-bottom: 1px solid;
  border-bottom-color: #02404e;
  color: ${theme('thread.articleDigest')};
  margin-top: 20px;
  margin-bottom: 15px;
  padding-bottom: 20px;
  padding-left: 4px;
`
export const ListWrapper = styled.div`
  margin-left: 5px;
`
