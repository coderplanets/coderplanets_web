import React from 'react'

// import { ICON_CMD } from '../../config'
import { BuyMeChuanChuan } from '../../components'

import {
  Wrapper,
  BaseInfo,
  /* BeianInfo, */
  Divider,
  About,
  Beian,
  Powerby,
  Support,
  PowerbyLink,
  GitSource,
} from './styles/brief_view'

// import { Wrapper } from './styles'

import { toggleSponsorHelper } from './logic'

const BriefView = ({ showSponsor }) => (
  <Wrapper>
    <BuyMeChuanChuan show={showSponsor} onClose={toggleSponsorHelper} />
    <BaseInfo>
      <Beian
        href="http://www.miitbeian.gov.cn"
        rel="noopener noreferrer"
        target="_blank"
      >
        蜀ICP备17043722号-4
      </Beian>
      <Divider>|</Divider>
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
      <Support onClick={toggleSponsorHelper}>打赏</Support>
      <Divider>|</Divider>
      <GitSource>
        <iframe
          title="souce_attr"
          src="https://ghbtns.com/github-btn.html?user=coderplanets&repo=coderplanets_web&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80px"
          height="20px"
        />
      </GitSource>
    </BaseInfo>
  </Wrapper>
)

export default BriefView
