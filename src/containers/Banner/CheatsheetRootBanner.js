import React from 'react'

import {
  CheatsheetBanner,
  CheatsheetWrapper,
  CheatsheetTitle,
  CheatsheetDesc,
} from './styles/cheatsheet_root_banner'

const CheatsheetRootBanner = () => {
  return (
    <CheatsheetBanner>
      <CheatsheetWrapper>
        <CheatsheetTitle>cheatsheet</CheatsheetTitle>
        <CheatsheetDesc>TODO: 这里应该是一个搜索框</CheatsheetDesc>
      </CheatsheetWrapper>
    </CheatsheetBanner>
  )
}

export default CheatsheetRootBanner
