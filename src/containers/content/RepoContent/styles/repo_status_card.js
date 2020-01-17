import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  min-height: 100px;
  padding: 20px;
  padding-bottom: 0;
  max-width: 300px;
  width: 100%;
  flex-wrap: wrap;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
  ${cs.media.mobile`
    width: 100%;
  `};
`
export const ReleaseWrapper = styled.div`
  ${cs.flex('justify-between')};
`
export const ReleaseTag = styled.div`
  color: ${theme('banner.title')};
  border: 1px solid;
  border-color: ${theme('banner.title')};
  padding: 0 4px;
  border-radius: 3px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1em;
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 4px;
`

export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  margin-top: 14px;
  margin-bottom: 15px;
`
