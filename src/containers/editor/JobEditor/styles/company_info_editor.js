import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'
import { TitleInput } from './editor'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  margin-bottom: 20px;
`
export const Content = styled.div`
  ${cs.flex()};

  padding: 10px;
  border: 1px solid;
  width: 350px;
  height: 120px;
  border-radius: 4px
  border: 1px solid;
  border-top: 2px solid;
  border-color: ${theme('editor.title')};
`
export const LogoUploadBox = styled.div`
  ${cs.flex('align-both')};

  width: 100px;
  height: 100px;
  border: 1px dashed;
  border-radius: 4px;
  margin-right: 10px;
`
export const CompanyLogo = styled(Img)`
  border-radius: 3px;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`

export const UploadHint = styled.div`
  padding: 10px;
  text-align: center;
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const CompanyInfo = styled.div`
  ${cs.flexColumn()};
`
const Inputer = styled(TitleInput)`
  height: 32px;
  text-align: left;
  width: 100%;
`
export const TitleInputer = styled(Inputer)`
  height: 32px;
  font-size: 1rem;
  text-align: left;
`
export const LinkInputer = styled(Inputer)`
  height: 32px;
  font-size: 0.9rem;
  text-align: left;
`
