import React from 'react'
import { toUpper, isEmpty } from 'ramda'

import { nilOrEmpty } from '@/utils/validator'
import Maybe from '@/widgets/Maybe'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  BoxWrapper,
  Label,
  Number,
  BuilderWrapper,
  Avatar,
  Linker,
  PopInfo,
  PopAvatar,
  PopNickname,
} from './styles/states_containers'

const BuilderList = ({ entries }) => (
  <BuilderWrapper>
    {entries.map((builder) => (
      <Tooltip
        key={builder.htmlUrl}
        content={
          <PopInfo>
            <PopAvatar src={builder.avatar} />
            <PopNickname
              href={builder.htmlUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              @ {builder.nickname}
            </PopNickname>
          </PopInfo>
        }
        placement="bottom"
      >
        <Linker
          href={builder.htmlUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Avatar src={builder.avatar} />
        </Linker>
      </Tooltip>
    ))}
  </BuilderWrapper>
)

const StatesContainers = ({ repo }) => (
  <Wrapper>
    <Linker
      href={`${repo.repoUrl}/issues`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>Issue</Label>
        <Number>{repo.issuesCount}</Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/pulls`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>PRs</Label>
        <Number>{repo.prsCount}</Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/releases`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>Release</Label>
        <Number
          small={
            nilOrEmpty(repo.releaseTag) ? true : repo.releaseTag.length > 10
          }
        >
          {repo.releaseTag || '--'}
        </Number>
      </BoxWrapper>
    </Linker>
    <Linker
      href={`${repo.repoUrl}/blob/master/LICENSE`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <BoxWrapper>
        <Label>License</Label>
        {repo.license ? (
          <Number small={repo.license.length > 5}>
            {toUpper(repo.license) || '--'}
          </Number>
        ) : (
          <Number>--</Number>
        )}
      </BoxWrapper>
    </Linker>
    <BoxWrapper grow nomargin nohover>
      <Label>Contributers</Label>
      <Maybe
        test={!isEmpty(repo.contributors)}
        loading={<div>api rate limit</div>}
      >
        <BuilderList entries={repo.contributors} />
      </Maybe>
    </BoxWrapper>
  </Wrapper>
)

export default React.memo(StatesContainers)
