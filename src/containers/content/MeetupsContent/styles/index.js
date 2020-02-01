import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  padding: 10px 6vw;
  margin-top: 12px;
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`
export const SidebarWrapper = styled.div`
  ${cs.flexColumn()};
  margin-right: 20px;
`
export const ContentWrapper = styled.div`
  ${cs.flex()};
  align-content: start;
  flex-wrap: wrap;
  max-width: calc(100% - 160px);
`
export const NaviFooter = styled.div`
  ${cs.flexColumn('align-end')};
  border-top: 1px solid;
  border-top-color: #0d4353;
  padding-top: 20px;
  color: ${theme('thread.articleDigest')};
  height: 300px;
  margin-left: 10px;
  margin-top: 50px;
`

export const Terms = styled.div`
  ${cs.flex('align-center')};
  margin-top: 12px;
`
export const TermItem = styled.div`
  font-weight: bold;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
