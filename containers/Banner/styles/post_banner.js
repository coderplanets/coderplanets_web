import styled from 'styled-components'

// import { theme } from '../../../utils'

import { BaseBanner, BaseBannerContent, NumbersWrapper } from './index'

export const NumbersInfo = NumbersWrapper.extend`
  margin-top: 0;
`

export const BannerContainer = BaseBanner.extend`
  height: 100px;
  min-height: 100px;
`

export const BannerContentWrapper = BaseBannerContent.extend`
  display: flex;
`
export const PostBrief = styled.div`
  width: 60%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.6em;
  color: #69999c;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Desc = styled.div`
  margin-top: 5px;
  display: flex;
  font-size: 1.1em;
  color: #a7bfc0;
`
export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 5px;
`
export const PrintTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid #62999b;
  color: #62999b;
  margin-right: 8px;
`
export const Username = styled.div`
  margin-right: 3px;
  &:hover {
    cursor: pointer;
    color: #719a9b;
  }
`
