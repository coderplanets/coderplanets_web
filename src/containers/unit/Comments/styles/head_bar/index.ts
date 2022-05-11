import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  margin-bottom: 5px;

  ${css.media.mobile`
    border-bottom: 1px solid;
    border-bottom-color: #0b4252;
    padding-bottom: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  `};
`

export const holder = 1
