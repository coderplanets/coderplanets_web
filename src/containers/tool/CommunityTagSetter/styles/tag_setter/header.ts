import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  height: 50px;
  width: 100%;
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};
  color: ${theme('thread.articleTitle')};
  padding-left: 20px;
  padding-right: 18px;
`

export const Title = styled.div`
  ${css.flex('align-center')};
`
export const Actions = styled.div`
  ${css.flex('align-center')};
`
export const CommunityLabel = styled.div`
  ${css.flex('align-center')};
  margin-left: 10px;
  font-size: 15px;
`
export const CommunityLogo = styled(Img)`
  ${css.size(15)};
  margin-right: 5px;
`
