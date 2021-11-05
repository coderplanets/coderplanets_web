import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import ManSVG from '@/icons/Man'
import WomanSVG from '@/icons/Woman'

export const Wrapper = styled.div`
  ${css.flex()};
`
const sexIcon = `
  ${css.size(20)};
  margin-right: 6px;
  margin-left: 5px;
  cursor: pointer;
`
export const DudeIcon = styled(ManSVG)<{ value: string }>`
  ${sexIcon};
  fill: ${({ value }) =>
    value === 'dude' ? theme('baseColor.blue') : theme('thread.articleDigest')};
`
export const GirlIcon = styled(WomanSVG)<{ value: string }>`
  ${sexIcon};
  fill: ${({ value }) =>
    value === 'girl' ? theme('baseColor.pink') : theme('thread.articleDigest')};
  margin-top: 1px;
`
export const SexLable = styled.div`
  font-size: 1em;
  color: ${theme('thread.articleDigest')};
  margin-right: 10px;
`

export const SexInput = styled.div`
  ${css.flex()};
  width: 250px;
`
