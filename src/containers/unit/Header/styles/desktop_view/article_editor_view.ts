import styled from 'styled-components'

import { css, WIDTH } from '@/utils'

import { Wrapper as CommunityWrapper } from './community_view'

export { RouterWrapper, MoreIcon } from './article_view'

export const Wrapper = styled(CommunityWrapper)`
  ${css.flex('align-both')};
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start')};
  width: ${WIDTH.ARTICLE_EDITOR.CONTENT};
  align-items: center;
`

export const Operations = styled.div``
