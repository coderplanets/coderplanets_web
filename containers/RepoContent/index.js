/*
 *
 * RepoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { MarkDownRender, Maybe } from '../../components'
import SideCards from './SideCards'

import { Wrapper, MainWrapper, ArticleWrapper, CommentsWrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoContent')
/* eslint-enable no-unused-vars */

class RepoContentContainer extends React.Component {
  componentDidMount() {
    const { repoContent } = this.props
    logic.init(repoContent)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { repoContent } = this.props
    const { viewingRepoData } = repoContent

    return (
      <Wrapper>
        <Maybe test={viewingRepoData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <MarkDownRender body={viewingRepoData.readme} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingRepoData} />
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('repoContent'))(observer(RepoContentContainer))
