import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  padding: 0 10px;
  margin-top: 50px;

  ${css.media.mobile`
    padding: 0 15px;
  `};
`
export const Title = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  flex-grow: 1;
  margin-top: -4px;
  padding-left: 3px;
`
export const EmptyHint = styled(Title)`
  margin-top: 20px;
`
export const Divider = styled.div`
  width: 100%;
  padding: 0 5px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.2;
  margin-top: 12px;
`
