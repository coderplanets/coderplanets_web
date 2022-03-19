import styled from 'styled-components'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

/* ${css.flex('align-center')}; */
/* align-items: ${({ descExpand }) =>
    descExpand ? 'flex-start' : 'center'}; */
export const Wrapper = styled.div``
export const Normal = styled.div<{ margin?: boolean }>`
  ${css.flex('align-center')};
  color: ${theme('banner.desc')};
  font-size: 14px;
  max-width: 490px;
  margin: ${({ margin }) => (margin ? '10px 0' : 0)};

  ${css.media.mobile`
    font-size: 13px;
  `};

  /* ${css.media.tablet`
    ${css.cutRest('220px')};
  `};

  ${css.media.mobile`
    ${css.cutRest('180px')};
  `}; */
`
export const Desc = styled.div`
  ${css.cutRest('360px')};
  font-size: 13px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  ${css.media.mobile`
    ${css.cutRest('220px')};
  `};
`
export const IconWrapper = styled.div`
  margin-left: 8px;
`
