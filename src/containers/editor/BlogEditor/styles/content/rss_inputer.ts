import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  /* ${css.flexColumn('align-center')}; */
  /* width: 100%; */
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 8px;
`
export const InputerWrapper = styled.div`
  position: relative;
`
export const Inputer = styled(Input)`
  width: calc(100% - 20px);
  color: ${theme('thread.articleTitle')};
  display: block;
  border: 1px solid;
  border-color: #006279;
  border-radius: 15px;
  background: #05222b;
  padding-left: 12px;
  height: 50px;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
    color: ${theme('thread.articleTitle')};
    opacity: 0.6;
  }
`
export const HintWrapper = styled.ul`
  list-style: disc;
  margin-left: 24px;
  margin-top: 36px;
`
export const Hint = styled.li`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-bottom: 8px;
`
