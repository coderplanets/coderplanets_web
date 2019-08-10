import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 140px;
  padding: 20px;
  max-width: 300px;
  flex-wrap: wrap;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;

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
