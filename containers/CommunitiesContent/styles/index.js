import styled from 'styled-components'

import { theme } from '../../../utils'
import Img from '../../../components/Img'

export const CommunityIcon = styled(Img)`
  width: 60px;
  height: 60px;
  margin-top: -40px;
`

export const Card = styled.div`
  position: relative;
  padding-top: 12px;
  padding: 10px;
  padding-bottom: 0;
  width: 250px;
  height: 250px;
  margin-right: 30px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  &:hover {
    border: 1px solid;
    border-color: ${theme('content.cardBorderHover')};
  }
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`
export const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme('banner.title')};
`
export const CardDesc = styled.div`
  font-size: 1em;
  text-align: center;
  min-height: 50px;
  color: ${theme('banner.desc')};
`
export const ActivitySpark = styled.div`
  width: 60%;
`

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  bottom: 16px;
  color: ${theme('banner.desc')};
`

export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('content.cardBorder')};
  margin-bottom: 5px;
`

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Wrapper = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
