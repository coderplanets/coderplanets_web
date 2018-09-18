import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

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
`
export const Title = styled.h2`
  color: ${theme('form.label')};
`
export const CoversWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 10px;
`
export const ThumbWrapper = styled.div`
  height: 100px;
  width: 180px;
  border: 1px dashed;
  border-color: ${theme('form.label')};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`
export const PosterWrapper = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  border: 1px dashed;
  border-radius: 3px;
  border-color: ${theme('form.label')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UploaderLabel = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
export const UploaderIcon = styled(Img)`
  fill: ${theme('form.label')};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const UploaderText = styled.div`
  color: ${theme('form.label')};
  font-size: 1.2rem;
`
export const FormWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`
export const AlertWrapper = styled.div`
  padding: 0 10px;
  margin-bottom: 15px;
`
export const WarnMsgWrapper = styled.div`
  font-size: 0.8rem;
`
export const WarnMsgItem = styled.div`
  display: flex;
  align-items: flex-start;
`
export const WarnMsgIcon = styled(Img)`
  fill: ${theme('alertWarn.text')};
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: 2px;
  opacity: 0.8;
`
export const WarnMsgText = styled.div``
