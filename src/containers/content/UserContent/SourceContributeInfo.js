import React from 'react'

import { ICON_CMD, GITHUB_WEB_ADDR, GITHUB_SERVER_ADDR } from '@/config'

import { AttachWrapper, AttachIcon, AttachLink } from './styles/digest_board'
import { Split } from './styles/source_contribute_info'

// TODO: link_to coderplanets_web/commits?author=mydearxym

const SourceContributeInfo = ({ data }) => (
  <AttachWrapper>
    <AttachIcon src={`${ICON_CMD}/member_contributor.svg`} />
    本站源码贡献者(
    {data.web && (
      <AttachLink
        href={`${GITHUB_WEB_ADDR}/graphs/contributors`}
        rel="noopener noreferrer"
        target="_blank"
      >
        web
      </AttachLink>
    )}
    {data.web && data.server && <Split>,</Split>}
    {data.server && (
      <AttachLink
        href={`${GITHUB_SERVER_ADDR}/graphs/contributors`}
        rel="noopener noreferrer"
        target="_blank"
      >
        server
      </AttachLink>
    )}
    )
  </AttachWrapper>
)

export default React.memo(SourceContributeInfo)
