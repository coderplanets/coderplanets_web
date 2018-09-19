import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 12px;
  padding-top: 10px;
`
export const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  height: 30px;
  line-height: 1.2;
`

export const UserName = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.title')};
`
export const PublishAt = styled.div`
  font-size: 0.9em;
  color: ${theme('banner.desc')};
`
export const Avatar = styled(Img)`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  align-items: flex-end;
`
export const Text = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  display: flex;
`
export const Value = styled.div`
  width: 40px;
  text-align: right;
`
