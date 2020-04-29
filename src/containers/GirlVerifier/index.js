/*
 *
 * GirlVerifier
 *
 */

import React from 'react'

import Input from '@components/Input'
import { Button } from '@components/Buttons'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import { Space } from '@components/Common'
import Modal from '@components/Modal'
import SectionLabel from '@components/SectionLabel'

import { Wrapper, FormWrapper, Footer, Submit, Back } from './styles'
import { useInit, toggleModal, onMessageChange, onConfirm } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:GirlVerifier')

const GirlVerifierContainer = ({ girlVerifier }) => {
  useInit(girlVerifier)

  const { showModal, accountInfo, message } = girlVerifier

  return (
    <Modal width="500px" show={showModal} showCloseBtn onClose={toggleModal}>
      <React.Fragment>
        <Wrapper>
          <SectionLabel
            title={` 你好哇, ${accountInfo.nickname}`}
            iconSrc={`${ICON_CMD}/smile.svg`}
            desc="请提供一下你在其他平台的 账号/主页 等，以便于证明你的女生身份。为避免不必要的麻烦以及你对隐私的顾虑，请尽量提供公开的账号信息。"
          />
        </Wrapper>

        <FormWrapper className="normal-form">
          <Input
            value={message}
            onChange={onMessageChange}
            placeholder="比如但不限于: 微博 / 知乎 / QQ / Instagram / Facebook / Twitter ... 等等"
            behavior="textarea"
          />
          <Footer>
            <Button type="primary" onClick={toggleModal} ghost>
              <Back>取消</Back>
            </Button>
            <Space right="15px;" />

            <Button type="primary" onClick={onConfirm}>
              <Submit>提 交</Submit>
            </Button>
          </Footer>
        </FormWrapper>
      </React.Fragment>
    </Modal>
  )
}

export default connectStore(GirlVerifierContainer)
