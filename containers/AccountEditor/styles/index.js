import styled from 'styled-components'

import Img from '../../../components/Img'
/* import { Img } from '../../../components' */
import { animate, theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};

  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  position: relative;
  animation: ${animate.fadeInRightRule};
`

export const AvatarPic = styled.img`
  ${cs.circle('70px')};
  margin-bottom: 30px;
`

export const BackIcon = styled(Img)`
  fill: ${theme('font')};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 13px;
  left: 18px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
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

export const FormItemWrapper = styled.div`
  ${cs.flex()};
  margin-bottom: 25px;
`
export const FormLable = styled.div`
  font-size: 0.9rem;
  color: ${theme('form.label')};
  margin-right: 10px;
  margin-top: 5px;
  width: auto;
  text-align: right;
`

export const FormInput = styled.div`
  width: 250px;
`

export const Divider = styled.div`
  border-top: 1px solid;
  border-top-color: ${theme('preview.divider')};
  margin-top: 15px;
  width: 75%;
  margin-bottom: 20px;
`
export const ActionBtns = styled.div``
