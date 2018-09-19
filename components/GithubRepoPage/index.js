/*
 *
 * GithubRepoPage
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'

import MarkDownRender from '../MarkDownRender'
import TopHeader from './TopHeader'
import BodyHeader from './BodyHeader'
import Header from './Header'
import StatesContainers from './StatesContainers'

import {
  Wrapper,
  BodyWrapper,
  DescriptionWrapper,
  DescLink,
  ReadmeWrapper,
} from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:GithubRepoPage:index')
/* eslint-enable no-unused-vars */

const GithubRepoPage = () => (
  <Wrapper>
    <TopHeader />
    <BodyWrapper>
      <BodyHeader />
      <Header />
      <DescriptionWrapper>
        A declarative, efficient, and flexible JavaScript library for building
        user interfaces. Project Files for Youtube Tutorial Series Project Files
        for Youtube Tutorial Series. <DescLink>https://reactjs.org</DescLink>
      </DescriptionWrapper>
      <StatesContainers />
      <ReadmeWrapper>
        <MarkDownRender body="hello this is readme" />
      </ReadmeWrapper>
    </BodyWrapper>
  </Wrapper>
)

// GithubRepoPage.propTypes = {}

// GithubRepoPage.defaultProps = {}

export default GithubRepoPage
