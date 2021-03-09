import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('justify-center')};

  width: 100%;
  position: relative;
  min-height: 170px;
  border-bottom: 1px solid;
  border-bottom: ${theme('banner.spliter')};
`
export const SloganTextWrapper = styled.div`
  margin-left: 3px;
  margin-right: 3px;

  font-weight: ${({ highlight }) => (highlight ? 'bold' : '')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
