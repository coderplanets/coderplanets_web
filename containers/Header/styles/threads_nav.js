import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-end')};
  margin-left: 4vw;
`

export const CommunityLogo = styled(Img)`
  width: 22px;
  height: 22px;
  margin-right: 22px;
  display: block;
  margin-bottom: 4px;
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
`
