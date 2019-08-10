import React from 'react'

import { Input, Button } from 'antd'
import 'antd/lib/input/style/index.css'

import { Space } from '@components/BaseStyled'
import SectionLabel from '@components/SectionLabel'
import { ICON_CMD } from '@config'

import { Wrapper, Footer, Back, Submit } from './styles/form'

import { backToOverview, onMessageChange, onConfirm } from './logic'

const { TextArea } = Input

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
    <TextArea
      value={message}
      onChange={onMessageChange}
      placeholder="详细信息"
      autosize={{ minRows: 4, maxRows: 5 }}
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

export default Form
