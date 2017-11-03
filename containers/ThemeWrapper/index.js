/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { storeSelector } from '../../utils/functions'

import AntOverWrite from './AntOverWrite'
import BasicOverWrite from './BasicOverWrite'
import NormalizeStyle from './NormalizeStyle'

const ThemeObserver = ({ children, theme }) => (
  <ThemeProvider theme={theme.themeData}>
    <BasicOverWrite>
      <AntOverWrite>
        <style jsx global>
          {NormalizeStyle}
        </style>
        <div>{children}</div>
      </AntOverWrite>
    </BasicOverWrite>
  </ThemeProvider>
)

export default inject(storeSelector('theme'))(observer(ThemeObserver))
