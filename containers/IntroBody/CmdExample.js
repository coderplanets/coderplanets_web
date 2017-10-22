import React from 'react'
import styled from 'styled-components'
import { FormattedMessage as I18n } from 'react-intl'

import lang from './lang'
import { HorizontalCenter } from '../../components/BaseStyled'
// import Doraemon from '../../containers/Doraemon'

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
  </HorizontalCenter>
)

export default CmdPanelExample
