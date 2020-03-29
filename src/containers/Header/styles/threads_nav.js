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
  ${cs.media.mobile`display: none`};
`
