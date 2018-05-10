/*
 *
 * Footer
 *
 */

import React from 'react'

import { makeDebugger } from '../../utils'
import {
  Container,
  BaseInfo,
  BeianInfo,
  Divider,
  About,
  Beian,
  Powerby,
  PowerbyLink,
  GitSource,
} from './styles'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Footer:index')
/* eslint-enable no-unused-vars */

const Footer = () => {
  return (
    <Container>
      <BaseInfo>
        {/* TODO: use next/link to link to post */}
        <About
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          关于 CPS
        </About>
        <Divider>|</Divider>
        <About
          href="http://api.coderplanets.com/graphiql"
          rel="noopener noreferrer"
          target="_blank"
        >
          Developer API
        </About>
        <Divider>|</Divider>
        <About
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          联系我们
        </About>
        <Divider>|</Divider>
        <Powerby>
          Powered by{' '}
          <PowerbyLink
            href="https://github.com/mastani-stack"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mastani-Stack
          </PowerbyLink>
        </Powerby>
        <Divider>|</Divider>
        <GitSource>
          <iframe
            title="souce_attr"
            src="https://ghbtns.com/github-btn.html?user=mydearxym&repo=mastani_web&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="80px"
            height="20px"
          />
        </GitSource>
      </BaseInfo>
      <BeianInfo>
        <Beian
          href="http://www.miitbeian.gov.cn"
          rel="noopener noreferrer"
          target="_blank"
        >
          蜀ICP备17043722号-4
        </Beian>
      </BeianInfo>
    </Container>
  )
}

export default Footer
