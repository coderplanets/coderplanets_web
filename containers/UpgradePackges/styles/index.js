import styled from 'styled-components'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  padding: 20px 20px;
  padding-bottom: 40px;
`

export const LabelWrapper = styled.div`
  margin-top: -10px;
  margin-left: 12px;
`

export const ContentWrapper = styled.div`
  ${cs.flex('justify-center')};
`

export const Dashboard = styled.div`
  ${cs.flexColumn('align-center')};

  width: 220px;
  min-height: 380px;
  margin-right: 24px;
  padding: 10px;
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-radius: 5px;
`
export const PkgTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme('banner.title')};
`
// border-color: ${theme('banner.desc')};
export const TitleDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 80%;
  margin-top: 10px;
  margin-bottom: 15px;
  opacity: 0.4;
`

export const ItemsWrapper = styled.div`
  text-align: left;
`
