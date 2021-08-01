import styled from 'styled-components'

// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  min-height: 90vh;
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flexGrow()};
  /* here must be a specific number, otherwise custom scorllbar will flash */
  /* height: 90vh; */
`
export const NormalListWrapper = styled.div`
  width: 100%;
`
