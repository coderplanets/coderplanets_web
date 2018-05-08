/*
 *
 * Footer
 *
 */

import React from 'react'

import { makeDebugger } from '../../utils'
import {
  Wrapper,
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
    <Wrapper>
      {/* TODO: use next/link to link to post */}
      <About
        href="http://www.miitbeian.gov.cn"
        rel="noopener noreferrer"
        target="_blank"
      >
        关于
      </About>
      <Divider>|</Divider>
      <Beian
        href="http://www.miitbeian.gov.cn"
        rel="noopener noreferrer"
        target="_blank"
      >
        蜀ICP备17043722号-4
      </Beian>
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
    </Wrapper>
  )
}

export default Footer
