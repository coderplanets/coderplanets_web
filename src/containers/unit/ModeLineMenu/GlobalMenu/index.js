import React from 'react'

import MainMenu from './MainMenu'
import MorePanel from '@/components/Navigator/MorePanel'

const GlobalMenu = () => {
  const currentMenu = 'main'

  return (
    <React.Fragment>
      {currentMenu === 'main' ? <MainMenu /> : <MorePanel />}
    </React.Fragment>
  )
}

export default GlobalMenu
