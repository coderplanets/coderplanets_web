import styled from 'styled-components'

// import Img from '@/components/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  padding-top: 8px;
  width: 100%;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const RightPart = styled.div`
  min-width: 230px;
  margin-left: 80px;
  padding-top: 5px;
  ${cs.media.tablet`display: none;`};
`
export const PublisherWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 8px;
  margin-left: -4px;
`
