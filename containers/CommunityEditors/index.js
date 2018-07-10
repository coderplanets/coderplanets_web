/*
 *
 * CommunityEditors
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { Container, HeaderDesc } from './styles'

import { UserList } from '../../components'
import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunityEditors')
/* eslint-enable no-unused-vars */

class CommunityEditorsContainer extends React.Component {
  componentWillMount() {
    const { communityEditors } = this.props
    logic.init(communityEditors)
  }

  render() {
    const { communityEditors } = this.props
    const { pagedEditorsData } = communityEditors

    return (
      <Container>
        <HeaderDesc>
          xxx 社区共有编辑/志愿者 14 人，同时对所有感兴趣的朋友开放, ... 详情
        </HeaderDesc>
        <br />
        <p>参与社区的日常维护维护, 删除灌水帖等低质量内容</p>
        <p>编辑社区 wiki, 上传视频资料等</p>
        <p>为社区文章设置标签, 便于更好的分类等</p>
        <div>the user lists</div>
        <UserList data={pagedEditorsData} />
      </Container>
    )
  }
}

export default inject(storePlug('communityEditors'))(
  observer(CommunityEditorsContainer)
)
