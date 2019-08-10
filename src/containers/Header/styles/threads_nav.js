import styled from 'styled-components'

import CommunityFaceLogo from '@components/CommunityFaceLogo'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-end')};
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  width: 22px;
  height: 22px;
  margin-right: 22px;
  margin-bottom: 4px;
`
export const MobileHint = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-bottom: 4px;
  margin-left: -10px;
  display: none;
  ${cs.media.mobile`display: flex`};
`
export const MiniTab = styled.div`
  border-bottom: ${({ active }) => (active ? '3px solid' : '')};
  border-bottom-color: ${({ active }) =>
    active ? theme('thread.articleTitle') : ''};
  padding-bottom: ${({ active }) => (active ? '2px' : '5px')};
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 6px;
  color: ${({ active }) =>
    active ? theme('header.tabActive') : theme('header.tabOthers')};
  cursor: pointer;

  ${cs.media.mobile`display: none`};
`
