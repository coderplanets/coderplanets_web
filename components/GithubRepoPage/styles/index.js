import styled from 'styled-components'
import { Button } from 'antd'

// import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const BodyWrapper = styled.div`
  padding: 20px 30px;
  height: auto;
  min-height: 80vh;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const DescriptionWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 5px;
  width: 100%;
  color: ${theme('banner.desc')};
`
export const HomepageLink = styled.a`
  color: ${theme('markdown.link')};
  transition: color 0.3s;
  margin-left: 12px;
  &:hover {
    color: ${theme('markdown.link')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const ReadmeWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`
export const SearchButton = styled(Button)`
  margin-right: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`
export const SyncButton = styled(Button)`
  display: ${({ show }) => (show ? 'block' : 'none')};

  margin-right: 10px;
`
export const PublishButton = styled(Button)`
  display: ${({ show }) => (show ? 'block' : 'none')};
`
