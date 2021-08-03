import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-bottom: 25px;
`
const SexIcon = styled(Img)`
  ${css.size(20)};
  margin-right: 10px;
  margin-left: 5px;
  cursor: pointer;
`

/* fill: ${props => */
/* props.active === props.item ? theme('font', props) : 'grey'}; */
export const Dude = styled.div``
export const Girl = styled.div``
export const DudeIcon = styled(SexIcon)<{ value: string }>`
  fill: ${({ value }) =>
    value === 'dude' ? '#869eec' : theme('drawer.divider')};
`

export const GirlIcon = styled(SexIcon)<{ value: string }>`
  fill: ${({ value }) => (value === 'girl' ? 'pink' : theme('drawer.divider'))};
  margin-top: 1px;
`
export const SexLable = styled.div`
  font-size: 1em;
  color: ${theme('form.label')};
  margin-right: 10px;
`

export const SexInput = styled.div`
  ${css.flex()};
  width: 250px;
`
