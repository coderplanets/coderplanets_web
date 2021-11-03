import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import InfoSVG from '@/icons/Info'

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
export const NormalSection = styled(Section)`
  width: 70px;
`
export const FollowSection = styled(Section)`
  width: 130px;
  padding-right: 10px;
`
export const GravitySection = styled(Section)`
  width: 130px;
  padding-left: 10px;
`
export const Num = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
`
export const Gravity = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: 12px;
  margin-left: 12px;
`
export const InfoIcon = styled(InfoSVG)`
  ${css.size(10)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;

  opacity: 0.8;
  cursor: pointer;
`
export const Title = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const JoinAt = styled(Num)`
  ${css.flex('align-both')};
  position: relative;
  font-size: 14px;
  margin-top: 1px;
  margin-bottom: 2px;
`
export const JoinSlash = styled.div`
  font-size: 10px;
  color: ${theme('thread.articleDigest')};
  font-weight: bolder;
  font-family: monospace;
  margin-right: 3px;
  margin-left: 3px;
  opacity: 0.8;
  transform: rotate(-5deg);
  margin-top: 2px;
`
export const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.3;
`
