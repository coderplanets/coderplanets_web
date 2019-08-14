import styled from 'styled-components'

import TabCitySVG from '@SvgIcons/TabCitySVG'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
`
export const ListWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  ${cs.media.tablet`width: 100%`};
`
export const LoadingWrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 15%;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const LoadingIcon = styled(TabCitySVG)`
  fill: ${theme('thread.articleDigest')};
  margin-top: -20%;
  width: 200px;
  height: 200px;
  display: block;
`
export const LoadingText = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Sidebar = styled.div`
  width: 15%;
  ${cs.media.tablet`display: none`};
`
