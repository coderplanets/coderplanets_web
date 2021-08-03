import styled from 'styled-components'

import css from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-top: 3px;
  margin-bottom: 10px;
`
export const Avatar = styled(Img)`
  ${css.size(16)};
  margin-right: 6px;
  border-radius: 3px;
`
