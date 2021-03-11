import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  background: #0f3644;
  border-radius: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-top: -15px;
  margin-bottom: 50px;
`
export const Section = styled.div`
  ${css.flexColumn('align-both')};
  width: 100px;
  height: 82px;
`
export const Num = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const IDTitle = styled(Title)`
  margin-top: 0;
  font-size: 10px;
`
export const IDNum = styled(Num)`
  font-size: 16px;
`
export const GradeTitle = styled(Title)`
  margin-top: 4px;
  font-size: 12px;
`
export const GradeDesc = styled.div`
  ${css.flex('align-baseline')};
`
export const GradeLetter = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
`
export const GradeText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-left: 1px;
`
export const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.3;
`
