import styled from 'styled-components'

// import { VIEW } from '@/constant'
import { css } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-right: 12px;
`
export const Avatar = styled(Img)`
  width: 150px;
  height: 150px;
  display: block;
  border-radius: 100%;
`
// export const Avatar = styled(Img)`
//   border-radius: 4px;
//   width: ${({ view }) => (view === VIEW.DESKTOP ? '120px' : '80px')};
//   height: ${({ view }) => (view === VIEW.DESKTOP ? '120px' : '80px')};
//   margin-top: 6px;
//   margin-bottom: 8px;
//   cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
// `
