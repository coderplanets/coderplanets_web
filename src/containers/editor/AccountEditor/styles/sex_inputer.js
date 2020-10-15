import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-bottom: 25px;
`
const SexIcon = styled(Img)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 5px;
  cursor: pointer;
`

/* fill: ${props => */
/* props.active === props.item ? theme('font', props) : 'grey'}; */
export const Dude = styled.div``
export const Girl = styled.div``
export const DudeIcon = styled(SexIcon)`
  fill: ${({ value }) =>
    value === 'dude' ? '#869eec' : theme('drawer.divider')};
`

export const GirlIcon = styled(SexIcon)`
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
