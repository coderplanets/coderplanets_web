import styled from 'styled-components'

import Img from 'components/Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex()};
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
    value === 'dude' ? '#869eec' : theme('preview.divider')};
`

export const GirlIcon = styled(SexIcon)`
  fill: ${({ value }) =>
    value === 'girl' ? 'pink' : theme('preview.divider')};
  margin-top: 1px;
`
export const SexLable = styled.div`
  font-size: 1em;
  color: ${theme('form.label')};
  margin-right: 10px;
`

export const SexInput = styled.div`
  ${cs.flex()};
  width: 250px;
`
