import styled from 'styled-components'

import { TActive } from '@/spec'
import { theme, css, animate } from '@/utils'
import { Button } from '@/components/Buttons'

export const Wrapper = styled.div<{ updating: boolean }>`
  animation: ${({ updating }) =>
    updating ? `${animate.breath} 1.2s linear infinite` : ''};
`
export const BodyWrapper = styled.div`
  ${css.flexColumn('align-center')};
  padding: 20px 30px;
  height: auto;
  min-height: 600px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
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
export const Footer = styled.div<TActive>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`
export const SearchButton = styled(Button)`
  margin-right: 10px;
`
export const PublishButton = styled(Button)``

export const ReadonlyHolder = styled.div`
  margin-bottom: 10px;
`
