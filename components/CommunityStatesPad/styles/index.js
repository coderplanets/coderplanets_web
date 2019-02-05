import styled from 'styled-components'

// import Img from 'Img'
import { theme, cs, animate } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  text-align: center;
`
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};
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

// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  font-size: ${({ small }) => (small ? '0.7rem' : '0.8rem')};
  margin-top: ${({ small }) => (small ? '4px' : '0')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    animation: ${animate.pulseRule};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }
`
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readOnly }) => (readOnly ? '' : theme('banner.active'))};
    animation: ${animate.pulseRule};
    cursor: ${({ readOnly }) => (readOnly ? '' : 'pointer')};
  }

  ${cs.media.mobile`font-size: 1.2rem;`};
  ${cs.media.tablet`font-size: 1.2rem;`};
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  min-height: 40px;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  ${cs.media.mobile`display: none`};
  ${cs.media.tablet`
    margin-left: 5px;
    margin-right: 5px;
  `};
`
