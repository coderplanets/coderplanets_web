import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import { LineDivider } from '@/widgets/Common'

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
export const SettingWrapper = styled.div<TActive>`
  ${css.flex()};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  margin-left: 3px;
`
export const SwitchWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  padding-right: 10px;
`
export const ToggleTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-left: 1px;
  margin-top: 2px;
`
export const Divider = styled(LineDivider)`
  height: 70px;
  margin-left: 10px;
  margin-right: 65px;
  opacity: 0.3;
  margin-top: 30px;
`
export const GeneralSettings = styled.div`
  width: 45%;
`
export const AngleSettings = styled.div`
  margin-top: -1px;
`
