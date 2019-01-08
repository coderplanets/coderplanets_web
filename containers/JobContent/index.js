/*
 *
 * JobContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import Comments from '../Comments'
import { MarkDownRender } from '../../components'
import CopyrightHeader from './CopyrightHeader'

import {
  Container,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles'

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
    const { viewingJobData } = jobContent

    return (
      <Container>
        {R.isNil(viewingJobData.id) ? null : (
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <CopyrightHeader data={viewingJobData} />
                <MarkDownRender body={viewingJobData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingJobData} />
          </React.Fragment>
        )}
      </Container>
    )
  }
}

export default inject(storePlug('jobContent'))(observer(JobContentContainer))
