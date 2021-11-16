/*
 *
 * Catalog index
 *
 */

import { FC, memo } from 'react'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Linker from '@/widgets/Linker'

import {
  Wrapper,
  BackWrapper,
  BackHeader,
  LineDivider,
  Note,
  Content,
  Block,
  Header,
  Intro,
  Timestamp,
  Body,
  Title,
  Desc,
  Icon,
} from '../styles/body/catalog'
import { setView } from '../logic'

import demo from '../demo'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Catalog: FC = () => {
  return (
    <Wrapper>
      <BackWrapper>
        <BackHeader>
          <ArrowButton
            size="medium"
            direction="left"
            onClick={() => setView('default')}
          >
            返回
          </ArrowButton>
        </BackHeader>
        <LineDivider />
        <Note>
          目前是内测阶段，前端仅作产品层面展示。在针对条目的富文本编辑、协同管理等方面还有很多细节需要完善，如果你哟任何意见欢迎反馈至
          <Linker
            src="/feedback"
            external={false}
            text="feedback"
            inline
            left={2}
          />
        </Note>
      </BackWrapper>
      <Content>
        {demo.map((item) => (
          <Block key={item.id} active={item.active}>
            <Header>
              <Intro>
                <Icon src={item.icon} />
                {item.total} 条
              </Intro>
              <Timestamp>{item.updatedAt}</Timestamp>
            </Header>
            <Body>
              <Title>{item.title}</Title>
              <Desc>{cutRest(item.desc, 13)}</Desc>
            </Body>
          </Block>
        ))}
      </Content>
    </Wrapper>
  )
}

export default memo(Catalog)
