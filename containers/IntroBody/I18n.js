import React from 'react'
import styled from 'styled-components'

import { FormattedMessage as I18n } from 'react-intl'

import lang from './lang'

import { Button } from './styles'
import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'

import * as logic from './logic'

import EnIcon from '../../static/en_guard.svg'
import CnIcon from '../../static/cn_panda.svg'

const EnglishFlag = styled(EnIcon)`
  width: 3vh;
  margin-right: 10px;
  position: relative;
  top: 2px;
`

const ChinaFlag = styled(CnIcon)`
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
          <EnglishFlag />
          <I18n {...lang.i18nEn} />
        </Button>
        <Button onClick={logic.changeLocale.bind(this, 'zh')}>
          <ChinaFlag />
          <I18n {...lang.i18nZh} />
        </Button>
      </HorizontalCenter>
    </Center>
  )
}

export default I18nPage
