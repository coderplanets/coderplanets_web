import styled from 'styled-components'

import { Img } from '../../../components'
import { Animate, theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${Animate.fadeInRight} 0.2s linear;
`

export const AvatarPic = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
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
export const DudeIcon = SexIcon.extend`
  fill: ${({ value }) =>
    value === 'dude' ? '#869eec' : theme('preview.divider')};
`

export const GirlIcon = SexIcon.extend`
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
  width: 250px;
  display: flex;
`

export const FormItemWrapper = styled.div`
  display: flex;
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
