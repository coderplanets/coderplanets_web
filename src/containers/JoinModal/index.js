//

/*
 *
 * JoinModal
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_BASE } from '@config'
import { connectStore, buildLog } from '@utils'

import Modal from '@components/Modal'
import { Wrapper, Block, QRCodePic, Title, DescWrapper } from './styles'

import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JoinModal')

const JoinModalContainer = ({ joinModal }) => {
  useInit(joinModal)

  const { show } = joinModal

  return (
    <Modal width="580px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper testid="joinModal">
        <Block>
          <QRCodePic src={`${ICON_BASE}/cps_wechat_group.png`} />
          <DescWrapper>
            <Title>温馨提示-：</Title>
            <p>
              感谢你对 coderplanets 的关注，本群内主要讨论 coderplanets
              项目的产品设计，技术细节以及相关问题的反馈。
              欢迎感兴趣的朋友加入讨论。本群谢绝广告推广，为保证活跃度会不定期清人，望谅解。如遇入群上线请先加
              vx: mydearxym。
            </p>
          </DescWrapper>
        </Block>
      </Wrapper>
    </Modal>
  )
}

JoinModalContainer.propTypes = {
  joinModal: T.any.isRequired,
}

JoinModalContainer.defaultProps = {}

export default connectStore(JoinModalContainer)
