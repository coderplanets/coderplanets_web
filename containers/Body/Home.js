import React from 'react'
import styled from 'styled-components'

import { FormattedMessage as I18n } from 'react-intl'
import lang from './lang'
// import * as logic from './logic'
import { A, Img } from '../../components/'

import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'

const Desc = styled.div`
  color: ${props => props.theme.font};
  font-size: 2vh;
  transition: color 0.3s;
`

const Home = () => {
  return (
    <HorizontalCenter>
      <Center>
        <Title>Mastani</Title>
        <iframe
          title="githubstar"
          src="https://ghbtns.com/github-btn.html?user=mydearxym&repo=mastani&type=star&count=true"
          scrolling="0"
          width="80px"
          height="25px"
        />

        <br />
        <br />
        <Desc>
          <I18n {...lang.homeDesc} />{' '}
        </Desc>
        <br />

        <A href="https://travis-ci.org/mydearxym/mastani">
          <Img
            src="https://travis-ci.org/mydearxym/mastani.svg"
            alt="Build Status"
          />
        </A>
        {'  '}
        <A href="https://coveralls.io/github/mydearxym/mastani?branch=dev">
          <Img
            src="https://coveralls.io/repos/github/mydearxym/mastani/badge.svg?branch=dev"
            alt="Coverage Status"
          />
        </A>
        {'  '}
        <A href="https://greenkeeper.io">
          <Img
            src="https://badges.greenkeeper.io/mydearxym/mastani.svg"
            alt="greenkeeper enabled"
          />
        </A>
        {'  '}
        <A href="https://david-dm.org/mydearxym/mastani">
          <Img
            src="https://david-dm.org/mydearxym/mastani.svg"
            alt="Dependency Status"
          />
        </A>
        {'  '}
        <A href="https://david-dm.org/mydearxym/mastani?type=dev">
          <Img
            src="https://david-dm.org/mydearxym/mastani/dev-status.svg"
            alt="devDependency Status"
          />
        </A>
      </Center>
    </HorizontalCenter>
  )
}

export default Home
