/*
 *
 * GirlVerifier
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input } from 'antd'

import { ICON_CMD } from '../../config'
import Modal from '../../components/Modal'
import SectionLabel from '../../components/SectionLabel'
import { Space } from '../../components/BaseStyled'

import { Wrapper, FormWrapper, Footer, Submit, Back } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:GirlVerifier')

const { TextArea } = Input

class GirlVerifierContainer extends React.Component {
  constructor(props) {
    super(props)

    const { girlVerifier } = props
    logic.init(girlVerifier)
  }

  render() {
    const { girlVerifier } = this.props
    const { showModal, accountInfo, message } = girlVerifier

    return (
      <React.Fragment>
        <Modal
          width="500px"
          show={showModal}
          showCloseBtn
          onClose={logic.toggleModal}
        >
          <React.Fragment>
            <Wrapper>
              <SectionLabel
                title={` 你好哇, ${accountInfo.nickname}`}
                iconSrc={`${ICON_CMD}/smile.svg`}
                desc="请提供一下你在其他平台的 账号/主页 等，以便于证明你的女生身份。为避免不必要的麻烦以及你对隐私的顾虑，请尽量提供公开的账号信息。"
              />
            </Wrapper>

            <FormWrapper className="normal-form">
              <TextArea
                value={message}
                onChange={logic.onMessageChange}
                placeholder="比如但不限于: 微博 / 知乎 / QQ / Instagram / Facebook / Twitter ... 等等"
                autosize={{ minRows: 4, maxRows: 5 }}
              />
              <Footer>
                <Button type="primary" onClick={logic.toggleModal} ghost>
                  <Back>取消</Back>
                </Button>
                <Space right="15px;" />

                <Button type="primary" onClick={logic.onConfirm}>
                  <Submit>提 交</Submit>
                </Button>
              </Footer>
            </FormWrapper>
          </React.Fragment>
        </Modal>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('girlVerifier'))(
  observer(GirlVerifierContainer)
)
