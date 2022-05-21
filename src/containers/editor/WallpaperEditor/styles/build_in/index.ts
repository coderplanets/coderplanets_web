import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  height: 100%;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 2px;
`
export const SettingWrapper = styled.div`
  margin-left: 3px;
`
