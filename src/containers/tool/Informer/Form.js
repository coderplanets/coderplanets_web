import React from 'react'

import Input from '@/components/Input'
import { Button } from '@/components/Buttons'

import { Space } from '@/components/Common'
import SectionLabel from '@/components/SectionLabel'
import { ICON_CMD } from '@/config'

import { Wrapper, Footer, Back, Submit } from './styles/form'

import { backToOverview, onMessageChange, onConfirm } from './logic'

const CurLabel = ({ type }) => {
  switch (type) {
    case 'pirate':
      return (
        <SectionLabel
          title="侵权/盗版举报"
          iconSrc={`${ICON_CMD}/police1.svg`}
        />
      )

    case 'sensitive':
      return (
        <SectionLabel
          title="违法信息举报"
          iconSrc={`${ICON_CMD}/police2.svg`}
        />
      )

    default:
      return (
        <SectionLabel title="杠精举报" iconSrc={`${ICON_CMD}/gangjing.svg`} />
      )
  }
}

const Form = ({ message, type }) => (
  <Wrapper className="normal-form">
    <CurLabel type={type} />
    <Input
      value={message}
      onChange={onMessageChange}
      placeholder="详细信息"
      behavior="textarea"
    />
    <Footer>
      <Button type="primary" onClick={backToOverview} ghost>
        <Back>重新选择</Back>
      </Button>
      <Space right="15px;" />

      <Button type="primary" onClick={onConfirm}>
        <Submit>提 交</Submit>
      </Button>
    </Footer>
  </Wrapper>
)

export default React.memo(Form)
