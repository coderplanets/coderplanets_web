import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 40px;
  background: ${theme('content.cardBg')};
  padding: 2px;
  border-radius: 5px;
  width: ${({ expand }) => (expand ? '200px' : '150px')};
  transition: width 0.2s linear;
`

export const SumWrapper = styled.div`
  ${cs.flex('align-both')};
  color: ${theme('thread.articleDigest')};
`

export const DetailText = styled.div`
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const DashboardListWrapper = styled.div`
  background: ${theme('content.cardBg')};
  min-height: 200px;
  max-height: 60vh;
  margin-top: 3px;
  padding-top: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 5px;
  overflow-y: scroll;
`
export const DashItem = styled.div`
  ${cs.flex('align-center')};
`
export const Title = styled.div`
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('thread.articleDigest')};
  width: 60px;
  text-align: center;
`

export const Divider = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  border-bottom: 1px dashed;
  border-bottom-color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  margin-bottom: 4px;
  width: 80%;
  margin-left: 8%;
  opacity: 0.5;
`

export const Num = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 50px;
  text-align: left;
`
export const Chart = styled.div`
  ${cs.flexGrow()};
`
export const ChartBar = styled.div`
  height: ${({ active }) => (active ? '4px' : '3px')};

  width: ${({ width }) => width};
  background: ${({ active }) =>
    active ? theme('geoMap.markerBg') : theme('thread.articleDigest')};
`
