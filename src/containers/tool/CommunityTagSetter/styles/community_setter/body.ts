import styled from 'styled-components'

// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding-right: 0;
  padding-bottom: 0;
  min-height: 400px;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
