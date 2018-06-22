import styled from 'styled-components'

import { theme } from '../../../utils'

export const CheatsheetBanner = styled.div`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`

export const CheatsheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CheatsheetTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: ${theme('thread.article_title')};
`
export const CheatsheetDesc = styled.div`
  font-size: 1.3em;
  margin-top: 5px;
  color: ${theme('thread.article_brief')};
`
