/*
 *
 * Content
 *
 */

import { FC, memo } from 'react'

import { mockUsers } from '@/utils/mock'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import TeamList from '@/widgets/TeamList'
import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  AboutBlock,
  ContributorBlock,
  ContributorsWrapper,
  Desc,
  ButtomWraper,
} from '../styles/footer'

type TProps = {
  mode?: string
}

const Footer: FC<TProps> = ({ mode }) => {
  return (
    <Wrapper center={mode === 'cover'}>
      <AboutBlock>
        关于酷导航
        <Desc>
          收集各种和开发设计群体直接间接相关的，具有一定水准的工具、产品、资源以及视角。
        </Desc>
        <ButtomWraper>
          <ArrowButton>更多</ArrowButton>
          <SpaceGrow />
        </ButtomWraper>
      </AboutBlock>
      {mode !== 'cover' && (
        <AboutBlock>
          关于本类别
          <Desc>本类别收录日常使用频率较高的效率工具，最后更新于 5 天前</Desc>
          <ButtomWraper>
            <ArrowButton>参与贡献</ArrowButton>
            <SpaceGrow />
          </ButtomWraper>
        </AboutBlock>
      )}
      <ContributorBlock>
        贡献者
        <ContributorsWrapper>
          <TeamList users={mockUsers(5)} layout="guide-contribute" />
        </ContributorsWrapper>
        <ButtomWraper>
          <ArrowButton>参与贡献</ArrowButton>
          <SpaceGrow />
        </ButtomWraper>
      </ContributorBlock>
    </Wrapper>
  )
}

export default memo(Footer)
