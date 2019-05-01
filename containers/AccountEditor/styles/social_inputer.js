import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div``
export const InputWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const FormItemWrapper = styled.div`
  ${cs.flex()};
  margin-bottom: 20px;
`
export const FormLable = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${theme('form.label')};
  margin-right: 10px;
  margin-top: 5px;
  width: 75px;
  margin-left: -35px;
`

export const FormInput = styled.div`
  width: 250px;
`
export const SocialIconsWrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
  width: 250px;
`
export const SocialIcon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  width: 18px;
  height: 18px;
  margin-right: 8px;
  transition: fill 0.3s;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
`

export const AddOnIcon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  margin-top: 3px;
  width: 16px;
  height: 16px;
  opacity: ${({ active }) => (active ? 1 : 0.9)};
`
export const AddonAddr = styled.div`
  font-size: 0.7rem;
  color: ${theme('banner.desc')};
`

export const TogglerWrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const TogglerLabelWrapper = styled(TogglerWrapper)`
  margin-left: 5%;
`
export const TogglerDivider = styled.div`
  margin-bottom: 25px;
  border-bottom: 1px dashed;
  border-color: ${theme('banner.desc')};
  opacity: 0.7;
  width: 32%;
  margin-top: 8px;
`
export const TogglerTextWrapper = styled.div`
  ${cs.flex()};
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const TogglerLabelText = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.7rem;
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-radius: 2px;
  align-self: start;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
    border-color: ${theme('banner.title')};
    color: ${theme('banner.title')};
  }

  transition: color 0.3s;
`

export const TogglerText = styled.div`
  color: ${theme('banner.title')};
`

const ToggleIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 15px;
  height: 15px;
  margin-left: 3px;
  margin-top: 2px;
`

export const UpIcon = styled(ToggleIcon)`
  transform: rotateX(180deg);
`

export const DownIcon = styled(ToggleIcon)``
