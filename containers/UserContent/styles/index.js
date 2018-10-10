import styled from 'styled-components'

/* import { Img } from '../../../components' */
import { theme } from '../../../utils'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 6%;
  margin-right: 5%;
`

export const MainWrapper = styled.div`
  padding: 20px;
  padding-top: 10px;
  min-height: 600px;
  background: ${theme('preview.articleBg')};
  margin-right: 35px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  width: 68%;
  display: flex;
  flex-direction: column;
`
export const TabberWrapper = styled.div`
  width: 80vw;
  display: flex;
`

export const SidebarWrapper = styled.div`
  width: 24%;
  color: ${theme('banner.desc')};
`
