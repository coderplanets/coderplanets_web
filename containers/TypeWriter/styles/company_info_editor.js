import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'
import { TitleInput } from './editor'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const Content = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid;
  width: 300px;
  height: 100px;
  border-radius: 4px
  border: 1px solid;
  border-top: 2px solid;
  border-color: ${theme('editor.title')};
`
export const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px dashed;
  border-radius: 4px;
  margin-right: 10px;
`
export const UploadHint = styled.div`
  padding: 10px;
  text-align: center;
`
export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const Inputer = styled(TitleInput)`
  height: 32px;
  text-align: left;
`
export const TitleInputer = styled(Inputer)`
  height: 32px;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 8px;
`
export const LinkInputer = styled(Inputer)`
  height: 32px;
  font-size: 0.9rem;
  text-align: left;
`
