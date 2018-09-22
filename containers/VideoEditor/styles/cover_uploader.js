import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 10px;
`
export const Thumbnil = styled.div`
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
export const Poster = styled.div`
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
  &:hover {
    color: ${theme('banner.title')};
  }
`
