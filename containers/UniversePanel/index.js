/*
*
* UniversePanel
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

import { PanelContainer, InfoBar, Wraper, InputBar, AddOn } from './Modal'

const debug = makeDebugger('C:UniversePanel')

const SearchEditor = () => (
  <InfoBar>
    <AddOn>&#9906;</AddOn>
    <InputBar
      spellCheck={false}
      autoCapitalize={false}
      autoCorrect="off"
      autoComplete="off"
    />
  </InfoBar>
)

const selector = ({ store }) => ({
  store: store.sidebar,
})

class UniversePanelContainer extends React.Component {
  componentDidMount() {
    debug('mount')
    logic.init(this.props.store)
  }

  render() {
    /*
       <PanelContainer>
         <Wraper>
           <InfoBar>
             <SearchEditor ... />
           </InfoBar>

         </Wraper>
       </PanelContainer>


     */

    return (
      <PanelContainer>
        <Wraper>
          <SearchEditor />
          <InfoBar>UniversePanel container!</InfoBar>
        </Wraper>
      </PanelContainer>
    )
  }
}

export default inject(selector)(observer(UniversePanelContainer))
