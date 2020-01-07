import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  min-height: 50px;
  padding: 10px;
  margin-top: 20px;

  max-width: 300px;
  flex-wrap: wrap;

  ${cs.media.tablet`
    width: 50%;
  `};

  ${cs.media.mobile`
    width: 50%;
    padding: 10px;
  `};
`

export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  margin-top: 14px;
  margin-bottom: 15px;
  ${cs.media.mobile`
    margin-top: 6px;
    margin-bottom: 10px;
  `};
`
