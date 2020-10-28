import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))``

export const BaseInfo = styled.div`
  ${css.flex('justify-between', 'align-end')};
  margin-top: 50px;
  margin-bottom: 30px;
`
