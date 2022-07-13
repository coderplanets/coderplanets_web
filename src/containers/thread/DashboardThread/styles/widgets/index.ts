import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ViewSVG from '@/icons/View'
import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding-left: 25px;
  padding-right: 50px;
`
export const TypeSelect = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-left: -10px;
  margin-bottom: 20px;
`
export const TabWrapper = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('border')};
`
export const BtnWrapper = styled.div`
  ${css.flex('align-both')};
`
export const ViewIcon = styled(ViewSVG)`
  fill: ${theme('button.primary')};
  ${css.size(12)};
  margin-right: 8px;
`
export const HintTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-bottom: 5px;
`
export const HintDesc = styled.div`
  color: ${theme('lightText')};
  font-size: 12px;
`
export const InputWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
  margin-bottom: 10px;
`
export const InputLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  width: 120px;
`
export const Inputer = styled(Input)`
  height: 30px;
  width: 150px;
`
