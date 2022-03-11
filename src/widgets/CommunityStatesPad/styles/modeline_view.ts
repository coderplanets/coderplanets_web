import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('justify-around')};
  width: 100%;
  padding: 0 45px;
`
export const NumberSection = styled.div`
  ${css.flexColumn('align-end')};

  padding: 0 5px;
`
export const ContentSection = styled(NumberSection)``
export const VolunteerSection = styled(NumberSection)<{ alignCenter: boolean }>`
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-end')};
`

type TNumberTitle = { small?: boolean; readOnly?: boolean }
// text-decoration: ${({ readOnly }) => (readOnly ? '' : 'underline')};
export const NumberTitle = styled.div<TNumberTitle>`
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
  border-color: ${theme('thread.articleDigest')};
  opacity: 0.3;
  height: 20px;
  align-self: flex-end;
  margin-bottom: 23px;
`
