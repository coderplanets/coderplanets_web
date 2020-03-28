/*
 *
 * SocialGroup
 *
 */

import React, { useState, useEffect } from 'react'
// import T from 'prop-types'
import PubSub from 'pubsub-js'

import { ICON_BASE } from '@config'
import { EVENT } from '@constant'
import { buildLog } from '@utils'

import Modal from '@components/Modal'
import { Wrapper, Block, QRCodePic, Title, DescWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SocialGroup:index')

const SocialGroup = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    PubSub.subscribe(EVENT.SOCIAL_MODAL, () => setActive(true))
    return () => PubSub.unsubscribe(EVENT.SOCIAL_MODAL)
  }, [])

  return (
    <Modal
      width="580px"
      show={active}
      showCloseBtn
      onClose={() => setActive(false)}
    >
      <Wrapper testid="socialGroup">
        <Block>
          <QRCodePic src={`${ICON_BASE}/cps_wechat_group.png`} />
          <DescWrapper>
            <Title>温馨提示：</Title>
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

SocialGroup.propTypes = {
  // https://www.npmjs.com/package/prop-types
  // attr: PropTypes.string,
}

SocialGroup.defaultProps = {
  // attr: 'socialGroup',
}

export default React.memo(SocialGroup)
