import React from 'react'
// import styled from 'styled-components'
import { FormattedMessage as I18n } from 'react-intl'

import Img from '../../components/Img'
import lang from './lang'

import Button from './Button'
import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'

import * as logic from './logic'

const I18nPage = () => {
  return (
    <Center>
      <HorizontalCenter>
        <Title>i18n</Title>
        <Button onClick={logic.changeLocale.bind(this, 'en')}>
          <Img src="/static/flag_en.png" alt="english flag" />
          <I18n {...lang.i18nEn} />
        </Button>
        <Button onClick={logic.changeLocale.bind(this, 'zh')}>
          <Img src="/static/flag_cn.png" alt="english flag" />
          <I18n {...lang.i18nZh} />
        </Button>
      </HorizontalCenter>
    </Center>
  )
}

export default I18nPage
