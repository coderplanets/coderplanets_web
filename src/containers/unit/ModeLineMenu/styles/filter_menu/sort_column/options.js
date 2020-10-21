import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-start')};
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 5px;
`
export const Title = styled.div`
  ${css.flex('justify-between', 'align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-bottom: 4px;
  width: 100%;
`
export const SelectIcon = styled(Img)`
  fill: #327faf;
  width: 11px;
  height: 11px;
`
export const UnSelectDot = styled.div`
  ${css.circle('11px')};
  margin-top: -1px;
  background: #04252d;
  border: 1px solid;
  border-color: #164656;
`
