import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

const BaseCard = styled.div`
  ${css.flex()};

  position: relative;
  padding: 15px 20px;
  width: 268px;
  height: 150px;
  margin-left: 25px;
  background: #fafafa; // ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 8px;
`
export const Wrapper = styled(BaseCard)`
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    border: 1px solid;
    border-color: #000000;
    /* box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15); same with the popover */
  }

  transition: all 0.2s;
`
export const Left = styled.div`
  ${css.flexColumn('align-start')};
  width: 80px;
  margin-right: 10px;
`

export const Right = styled.div`
  width: calc(100% - 80px);
  ${css.flexColumn('align-start')};
  flex-flow: 1;
`
// fill only works for non-colored svgs
export const CommunityIcon = styled(CommunityFaceLogo)<{ nonFill: boolean }>`
  ${css.size(26)};
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  margin-bottom: 8px;
  ${Wrapper}:hover & {
    fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.title'))};
  }
`
export const RawWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 13px;
  margin-left: -1px;
`
export const Slash = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 8px;
  margin-right: 2px;
  font-weight: bold;
`
export const Raw = styled.div`
  ${css.lineClamp(1)};
`
export const JoinWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`

export const JoinNum = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-right: 4px;
`
export const ContentWrapper = styled(JoinWrapper)`
  margin-top: -30px;
  margin-left: -3px;
`
export const Title = styled.a`
  margin-top: -2px;
  font-size: 18px;
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #139c9e;
    cursor: pointer;
  }
`
export const Desc = styled.div`
  ${css.lineClamp(2)}
  margin-top: 8px;
  color: ${theme('thread.articleDigest')};
  word-break: break-all;
  font-size: 13px;
`
export const ActivitySpark = styled.div`
  width: 80px;
  height: 60px;
  margin-left: -15px;
  margin-top: 8px;
`
export const Footer = styled.div`
  width: 100%;
  ${css.flex('align-center', 'justify-between')};
  /* border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')}; */
  padding-top: 15px;
`
export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  margin-bottom: 5px;
`
