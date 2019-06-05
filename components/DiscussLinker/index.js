/*
 *
 * DiscussLinker
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'

import { makelogger } from '@utils'
import {
  Wrapper,
  Header,
  Info,
  Title,
  Body,
  DiscussIcon,
  Divider,
  Footer,
  GithubIcon,
  IssueLink,
} from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:DiscussLinker:index')

const DiscussLinker = ({ title, desc, addr }) => (
  <Wrapper>
    <Header>
      <DiscussIcon src={`${ICON_CMD}/group_lights.svg`} />
      <Info>
        <Title>
          【{title}
          】正在讨论/设计中
        </Title>
        <Body>{desc}</Body>
      </Info>
    </Header>
    <Divider />
    <Footer>
      <GithubIcon src={`${ICON_CMD}/github.svg`} />
      <IssueLink href={addr} rel="noopener noreferrer" target="_blank">
        {addr}
      </IssueLink>
    </Footer>
  </Wrapper>
)

DiscussLinker.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  addr: PropTypes.string.isRequired,
}

DiscussLinker.defaultProps = {
  title: '该功能',
  desc: '你的宝贵意见或想法很重要，欢迎点击下方链接参与社区讨论',
}

export default React.memo(DiscussLinker)
