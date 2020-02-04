import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 170px;
  border-bottom: 1px solid;
  /* background: ${theme('banner.bg')}; */
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 160px;
  }
`
export const holder = 1
