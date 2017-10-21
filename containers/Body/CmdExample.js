import React from 'react'
import styled from 'styled-components'
import { FormattedMessage as I18n } from 'react-intl'

import lang from './lang'
import { HorizontalCenter } from '../../components/BaseStyled'
import Doraemon from '../../containers/Doraemon'

import { openDrawer } from './logic'

const Hinter = styled.div`
  padding-top: 18%;
  color: ${props => props.theme.font};
`

const CmdPanelExample = ({ doraemonVisable }) => (
  <HorizontalCenter>
    {doraemonVisable ? (
      <div />
    ) : (
      <Hinter>
        <I18n {...lang.doraemonHint} />
      </Hinter>
    )}
    <button onClick={openDrawer}>Drawer</button>
    <Doraemon />
  </HorizontalCenter>
)

export default CmdPanelExample
