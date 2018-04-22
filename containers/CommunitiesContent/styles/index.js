import styled from 'styled-components'
import ReactSVG from 'react-svg'

/* import { theme } from '../../../utils' */

export const CommunityIcon = styled(ReactSVG)`
  width: 80px;
  height: 80px;
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
  background: #f7f7f7;
  border: 1px solid #e6e6e6;
  &:hover {
    border: 1px solid lightgrey;
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
`
export const CardDesc = styled.div`
  font-size: 1em;
  color: #c1bebe;
  text-align: center;
  min-height: 50px;
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
`

export const Divider = styled.div`
  width: 90%;
  margin-top: 12px;
  border-top: 1px solid #e6e6e6;
  margin-bottom: 5px;
`

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Wrapper = styled.div`
  margin-top: 40px;
  display: block;
`

export const Pagi = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`
