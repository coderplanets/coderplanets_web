import styled from 'styled-components'

import { theme } from '../../../utils'

export const BaseBanner = styled.nav`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`
export const BaseBannerContent = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`
export const BannerContainer = styled(BaseBanner)`
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  display: flex;
`
export const PostBrief = styled.div`
  width: 60%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.5em;
  color: ${theme('thread.articleTitle')};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Desc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 8px;
  display: flex;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 5px;
`
export const MarkTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid;
  border-color: tomato;
  color: tomato;
  margin-right: 8px;
`
