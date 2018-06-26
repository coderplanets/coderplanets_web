/*
 *
 * PostContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'

import { ICON_ASSETS } from '../../config'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

import {
  Container,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
  SideWrapper,
  SidebarTitle,
  SidebarDesc,
  CommunityIcon,
  TagDot,
  TagWrapper,
  TagTitle,
  RelatedUser,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostContent')
/* eslint-enable no-unused-vars */

const fakePost = `吾愿吾亲爱之青年，生于青春，死于青春。——李大钊（北京大学图书馆主任、经济学教授）你要禁止他，他的力量便跟着你的禁止越发强大。——李大钊真正的个人主义指：一种是独立思想，不肯把别人的耳朵当耳朵、不肯把别人的眼睛当眼睛、不肯把别人的脑力当自己的脑力；二是个人对于自己思想信仰的结果要负完全责任，不怕权威、不怕监禁杀身，只认得真理，不认得个人利害。——胡适（北京大学校长）做一个有良知的知识分子是异常艰难的，但并非全无报酬。——胡适所以我时常害怕,愿中国青年都摆脱冷气,只是向上走,不必听自暴自弃者流的话.能做事的做事,能发声的发声.有一分热,发一分光,就令萤火一般,也可以在黑暗里发一点光,不必等候炬火。——鲁迅（北京大学讲师、校徽设计者）我又愿中国青年都只是向上走,不必理会这冷笑和暗箭。——鲁迅青年们先可以将中国变成一个有声的中国。大胆地说话，勇敢地进行，忘掉一切利害，推开了古人，将自己的真心的话发表出来。——鲁迅敢说，敢笑，敢哭，敢怒，敢骂，敢打。——鲁迅

作者：XP同学
链接：https://zhuanlan.zhihu.com/p/36027328
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`

class PostContentContainer extends React.Component {
  componentWillMount() {
    const { postContent } = this.props
    logic.init(postContent)
  }

  render() {
    return (
      <Container>
        <MainWrapper>
          <ArticleWrapper>{fakePost}</ArticleWrapper>
          <CommentsWrapper>
            <Comments />
          </CommentsWrapper>
        </MainWrapper>
        <SideWrapper>
          <SidebarTitle>所属社区</SidebarTitle>
          <SidebarDesc>
            <CommunityIcon src={`${ICON_ASSETS}/pl/typescript.svg`} />
            <CommunityIcon src={`${ICON_ASSETS}/pl/javascript.svg`} />
            <CommunityIcon src={`${ICON_ASSETS}/pl/elixir.svg`} />
            <CommunityIcon src={`${ICON_ASSETS}/pl/go.svg`} />
            <CommunityIcon src={`${ICON_ASSETS}/pl/java.svg`} />
          </SidebarDesc>
          <SidebarTitle>标签</SidebarTitle>

          <SidebarDesc column>
            <TagWrapper>
              <TagDot />
              <TagTitle>问答</TagTitle>
            </TagWrapper>
            <TagWrapper>
              <TagDot />
              <TagTitle>性能优化</TagTitle>
            </TagWrapper>
          </SidebarDesc>
          <SidebarTitle>参与者</SidebarTitle>
          <SidebarDesc noBottom>
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
            <RelatedUser src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
          </SidebarDesc>
        </SideWrapper>
      </Container>
    )
  }
}

export default inject(storePlug('postContent'))(observer(PostContentContainer))
