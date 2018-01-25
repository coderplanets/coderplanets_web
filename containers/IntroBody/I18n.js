import React from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { FormattedMessage as I18n } from 'react-intl'

import lang from './lang'
import { getSVGIconPath } from '../../utils'

import { Button } from './styles'
import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'

import * as logic from './logic'

const EnglishFlag = styled(ReactSVG)`
  width: 3vh;
  margin-right: 10px;
  position: relative;
  top: 2px;
`

const ChinaFlag = styled(ReactSVG)`
  width: 3vh;
  margin-right: 10px;
  position: relative;
  top: 3px;
`

const I18nPage = () => {
  return (
    <Center>
      <HorizontalCenter>
        <Title>
          <I18n {...lang.i18nTitle} />
        </Title>
        <Button onClick={logic.changeLocale.bind(this, 'en')}>
          <EnglishFlag path={getSVGIconPath('en_guard')} />
          <I18n {...lang.i18nEn} />
        </Button>
        <Button onClick={logic.changeLocale.bind(this, 'zh')}>
          <ChinaFlag path={getSVGIconPath('cn_panda')} />
          <I18n {...lang.i18nZh} />
        </Button>
      </HorizontalCenter>
    </Center>
  )
}

export default I18nPage
