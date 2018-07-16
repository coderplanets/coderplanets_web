/*
 *
 * PostContent
 *
 */

import React from 'react'
import R from 'ramda'
import shortid from 'shortid'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'

import { MarkDownRender } from '../../components'
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
  /* RelatedUser, */
  NomoreDesc,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostContent')
/* eslint-enable no-unused-vars */

const Communities = ({ data }) => {
  if (R.isEmpty(data)) return <NomoreDesc>不属于任何社区</NomoreDesc>

  return (
    <React.Fragment>
      {data.map(c => <CommunityIcon key={shortid.generate()} src={c.logo} />)}
    </React.Fragment>
  )
}

const Tags = ({ data }) => {
  if (R.isEmpty(data)) return <NomoreDesc>无标签</NomoreDesc>

  return (
    <React.Fragment>
      {data.map(t => (
        <TagWrapper key={shortid.generate()}>
          <TagDot color={t.color} />
          <TagTitle>{t.title}</TagTitle>
        </TagWrapper>
      ))}
    </React.Fragment>
  )
}

class PostContentContainer extends React.Component {
  componentWillMount() {
    const { postContent } = this.props
    logic.init(postContent)
  }

  render() {
    const {
      postContent: { postData },
    } = this.props

    return (
      <Container>
        {R.isNil(postData.id) ? null : (
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <MarkDownRender body={postData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideWrapper>
              <SidebarTitle>所属社区</SidebarTitle>
              <SidebarDesc>
                <Communities data={postData.communities} />
              </SidebarDesc>
              <SidebarTitle>标签</SidebarTitle>

              <SidebarDesc column noBottom>
                <Tags data={postData.tags} />
              </SidebarDesc>
              {/*
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
                */}
            </SideWrapper>
          </React.Fragment>
        )}
      </Container>
    )
  }
}

export default inject(storePlug('postContent'))(observer(PostContentContainer))
