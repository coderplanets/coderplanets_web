import React from 'react'

import { ICON_CMD, GITHUB_WEB_ADDR, GITHUB_SERVER_ADDR } from '@/config'

import { AttactWrapper, AttactIcon, AttactLink } from './styles/digest_board'
import { Split } from './styles/source_contribute_info'

// TODO: link_to coderplanets_web/commits?author=mydearxym

const SourceContributeInfo = ({ data }) => (
  <AttactWrapper>
    <AttactIcon src={`${ICON_CMD}/member_contributor.svg`} />
    本站源码贡献者(
    {data.web && (
      <AttactLink
        href={`${GITHUB_WEB_ADDR}/graphs/contributors`}
        rel="noopener noreferrer"
        target="_blank"
      >
        web
      </AttactLink>
    )}
    {data.web && data.server && <Split>,</Split>}
    {data.server && (
      <AttactLink
        href={`${GITHUB_SERVER_ADDR}/graphs/contributors`}
        rel="noopener noreferrer"
        target="_blank"
      >
        server
      </AttactLink>
    )}
    )
  </AttactWrapper>
)

export default React.memo(SourceContributeInfo)
