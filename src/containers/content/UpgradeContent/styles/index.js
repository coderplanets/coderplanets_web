import styled from 'styled-components'
import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-center')};
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
`
export const BannerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  height: 30vh;
  width: 100%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 22px;
  font-weight: bold;
  margin-top: -20px;
  margin-bottom: 10px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-bottom: 15px;
`
export const PayButtonWrapper = styled.div`
  position: relative;
`
export const ContentWrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
`
export const Dashboard = styled.div`
  position: relative;
  ${css.flexColumn('align-center')};
  width: 260px;
  min-height: 380px;
  padding: 20px 10px;
  padding-bottom: 30px;
  border: 2px solid;
  border-color: ${({ active }) =>
    active ? theme('banner.desc') : 'transparent'};
  border-radius: 5px;
  box-shadow: ${({ active }) =>
    active ? '1px 1px 20px 0px rgb(37 37 37 / 42%)' : 'none'};

  cursor: pointer;
  transition: all 0.25s;
`
export const CheckerWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`
export const TypeDesc = styled.div`
  text-align: center;
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  width: 200px;
  margin-top: 8px;

  opacity: ${({ active }) => (active ? 1 : 0.85)};

  ${Dashboard}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
`
export const TitleDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 80%;
  margin-top: 18px;
  margin-bottom: 20px;
  opacity: 0.4;
`
export const ItemsWrapper = styled.div`
  text-align: left;
  margin-left: 10px;
`
export const PayBtnWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`
export const FreeNote = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 110px;
  text-align: center;
`
export const Footer = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 100px;
`
