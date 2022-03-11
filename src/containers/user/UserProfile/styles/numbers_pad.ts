import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'
import InfoSVG from '@/icons/Info'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  background: #0f3644;
  border-radius: 8px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-top: -15px;
  margin-bottom: 50px;

  ${css.media.mobile`
    width: 100%;
    justify-content: space-around;
    margin-bottom: 35px;
    margin-left: 0;
  `};
`
const Section = styled.div`
  ${css.flexColumn('align-both')};
  width: 100px;
  height: 82px;

  ${css.media.mobile`
    width: 70px;
  `};
`
export const NormalSection = styled(Section)`
  width: 70px;
`
export const FollowSection = styled(Section)`
  width: 130px;
  padding-right: 10px;

  ${css.media.mobile`
    width: 80px;
  `};
`
export const GravitySection = styled(Section)`
  width: 130px;
  margin-left: 8px;

  ${css.media.mobile`
    margin-left: 5px;
    width: 80px;
  `};
`
export const JoinSection = styled(Section)`
  width: 200px;

  ${css.media.mobile`
    width: 150px;
  `};
`
export const CommunitiesWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: 4px;
`
export const Num = styled.div`
  font-size: 18px;
  margin-left: -18px;
  color: ${theme('thread.articleTitle')};
`
export const Gravity = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: 12px;
  margin-left: 6px;
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

export const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.3;
`
