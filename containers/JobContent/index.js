/*
 *
 * JobContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { MarkDownRender, Maybe } from '../../components'
import CopyrightHeader from './CopyrightHeader'

import { Wrapper, MainWrapper, ArticleWrapper, CommentsWrapper } from './styles'

import SideCards from './SideCards'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobContent')
/* eslint-enable no-unused-vars */

class JobContentContainer extends React.Component {
  componentDidMount() {
    const { jobContent } = this.props
    logic.init(jobContent)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { jobContent } = this.props
    const { viewingData } = jobContent

    return (
      <Wrapper>
        <Maybe test={viewingData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <CopyrightHeader data={viewingData} />
                <MarkDownRender body={viewingData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments ssr />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingData} />
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('jobContent'))(observer(JobContentContainer))
