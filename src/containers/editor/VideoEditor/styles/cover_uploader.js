import styled from 'styled-components'

import Img from '@/Img'
import { theme, animate, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};

  height: 200px;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 10px;
`
export const Thumbnil = styled.div`
  ${cs.flex('align-both')};
  align-self: center;

  position: relative;
  height: 100px;
  width: 180px;
  border: 1px dashed;
  border-color: ${theme('form.label')};
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`
export const Poster = styled.div`
  ${cs.flexColumnGrow('align-both')};
  height: 200px;
  position: relative;
  margin-left: 10px;
  border: 1px dashed;
  border-radius: 3px;
  border-color: ${theme('form.label')};
`
export const UploaderLabel = styled.div`
  ${cs.flex('align-center')};
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
export const CoverImg = styled(Img)`
  width: 100%;
  height: 100%;
`

export const ThumbCermeraIcon = styled(Img)`
  position: absolute;
  fill: #f9fcfc;
  width: 50px;
  height: 50px;
  top: 25%;
  left: 35%;
  opacity: 0;
  ${Thumbnil}:hover & {
    animation: ${animate.zoomInRule};
    opacity: 1;
  }
`
export const PosterCermeraIcon = styled(Img)`
  position: absolute;
  fill: #f9fcfc;
  width: 50px;
  height: 50px;
  top: 35%;
  left: 40%;
  opacity: 0;
  ${Poster}:hover & {
    animation: ${animate.zoomInRule};
    opacity: 1;
    cursor: pointer;
  }
`
