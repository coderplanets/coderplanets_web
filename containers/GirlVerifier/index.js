/*
 *
 * GirlVerifier
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Input } from 'antd'

import { ICON_CMD } from '../../config'
import { Modal, SectionLabel, Button, Space } from '../../components'
import { Wrapper, FormWrapper, Footer, Submit, Back } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:GirlVerifier')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

// NOTE: add me to ../containers/index
class GirlVerifierContainer extends React.Component {
  componentDidMount() {
    const { girlVerifier } = this.props
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
                desc="请提供一下你的其他公开社交账号/主页等，以便于核实你的女生身份。"
              />
            </Wrapper>

            <FormWrapper className="normal-form">
              <TextArea
                value={message}
                onChange={logic.onMessageChange}
                placeholder="比如: 微博/QQ空间/Instagram/Facebook/Twitter ... 等等"
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
