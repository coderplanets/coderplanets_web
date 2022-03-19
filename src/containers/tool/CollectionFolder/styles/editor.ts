import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import { MODAL_MIN_HEIGHT } from './metric'

export const Wrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  min-height: ${MODAL_MIN_HEIGHT};
`
export const Header = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  background: ${theme('modal.bg')};
  filter: ${theme('modal.subPanelShadow')};
  height: 50px;
  padding-left: 25px;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-start')};
  background: ${theme('modal.subPanel')};
  padding: 25px;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`
export const SidebarWrapper = styled.div`
  color: ${theme('thread.articleTitle')};
  width: 250px;
  padding-left: 12px;
  padding-top: 12px;
  margin-right: 10px;
`
export const NoteText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-right: 25px;
  margin-top: 10px;
  opacity: 0.6;
`
export const TipsText = styled(NoteText)`
  margin-right: 25px;
`
export const EditWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid;
  border-left-color: #043b49;
  padding-left: 32px;
`
export const FormItemWrapper = styled.div`
  ${css.flexColumn()};
  margin-bottom: 20px;
`
export const FormLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 10px;
  margin-left: 3px;
`
export const FormInput = styled.div`
  flex-grow: 1;
`
export const Footer = styled.div`
  margin-top: 30px;
  ${css.flex('align-center', 'justify-center')};
`
