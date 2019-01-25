/*
 *
 * GithubSyncWarning
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ISSUE_ADDR, ICON_CMD } from 'config'
import { makeDebugger } from 'utils'

import Modal from 'components/Modal'

import { Wrapper, Logo, Header, Desc, FootLinker } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:GithubSyncWarning:index')

const GithubSyncWarning = ({ show, onClose }) => (
  <Modal width="480px" show={show} onClose={onClose} showCloseBtn>
    <Wrapper>
      <Logo src={`${ICON_CMD}/github.svg`} />
      <Header>无法同步 Github 信息</Header>
      <Desc>
        同步 Github 信息需要使用您的 Github Token, 请参考下面链接进行设置
        (本站代码完全开源，不会以任何形式存储您的 token)。
      </Desc>
      <FootLinker href={`${ISSUE_ADDR}/323`}>{`${ISSUE_ADDR}/323`}</FootLinker>
    </Wrapper>
  </Modal>
)

GithubSyncWarning.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

GithubSyncWarning.defaultProps = {
  show: false,
  onClose: debug,
}

export default React.memo(GithubSyncWarning)
