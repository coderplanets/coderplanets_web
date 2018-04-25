import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { Animate } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  height: 100%;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: #f9fcfc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${Animate.fakeInRight} 0.2s linear;
`

export const AvatarPic = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-bottom: 30px;
`

export const BackIcon = styled(ReactSVG)`
  fill: #51abb2;
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

const SexIcon = styled(ReactSVG)`
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
  fill: ${props => (props.value === 'dude' ? '#869eec' : 'lightgrey')};
`

export const GirlIcon = SexIcon.extend`
  fill: ${props => (props.value === 'girl' ? 'pink' : 'lightgrey')};
  margin-top: 1px;
`
export const SexLable = styled.div`
  font-size: 1em;
  color: grey;
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
  font-size: 1em;
  color: grey;
  margin-right: 10px;
  margin-top: 5px;
`

export const FormInput = styled.div`
  width: 250px;
`

export const Divider = styled.div`
  border-top: 1px solid #e3eeed;
  margin-top: 15px;
  width: 75%;
  margin-bottom: 20px;
`
export const ActionBtns = styled.div``
