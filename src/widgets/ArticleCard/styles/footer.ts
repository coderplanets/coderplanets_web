import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  color: ${theme('thread.extraInfo')};
`
export const PublishWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 3px;
  margin-bottom: 8px;
  font-size: 13px;

  ${css.media.mobile`
    font-size: 12px;
  `};
`
export const Bottom = styled.div`
  ${css.flex('justify-between', 'align-center')};

  ${css.media.mobile`
    transform: scale(0.9);
    width: 109%;
    margin-left: -8px;
  `};
`
