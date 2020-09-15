import styled from 'styled-components'

// import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  text-align: center;
  ${cs.media.mobile`
    margin-top: -2px;
  `};
`
export const NumberSection = styled.div`
  ${cs.flexColumn('align-end')};
  background-color: ${({ active }) =>
    active ? theme('banner.numberHoverBg') : ''};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ readOnly }) =>
      readOnly ? '' : theme('banner.numberHoverBg')};
  }
`
export const ContentSection = styled(NumberSection)`
  ${cs.media.mobile`display: none`};
`
export const EditorSection = styled(NumberSection)`
  ${cs.media.mobile`display: none`};
`
export const ChargeSection = styled(NumberSection)`
  ${cs.flexColumn('align-center', 'justify-between')};
  ${cs.media.mobile`display: none`};
`
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  font-size: ${({ small }) => (small ? '11px' : '12px')};
  margin-top: ${({ small }) => (small ? '4px' : '0')};
  margin-bottom: 2px;
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 34px;
  align-self: flex-end;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 3px;
  ${cs.media.tablet`
    margin-left: 5px;
    margin-right: 5px;
  `};
  ${cs.media.mobile`display: none`};
`
