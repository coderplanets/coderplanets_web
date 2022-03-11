import styled from 'styled-components'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-end')};
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  ${css.size(22)};
  margin-right: 22px;
  margin-bottom: 4px;
`
export const MobileHint = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-bottom: 4px;
  margin-left: -10px;
  display: none;
  ${css.media.mobile`display: flex`};
`
export const MiniTab = styled.div`
  ${css.media.mobile`display: none`};
`
