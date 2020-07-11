import React from 'react'

import { ICON_CMD } from '@/config'

import Detail from './Detail'

import {
  Wrapper,
  InnerWrapper,
  SubscribeBtn,
  SubscribeIcon,
  Desc,
} from '../styles/actions'

import { changeView } from '../logic'

const Actions = ({ view }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {view === 'default' ? (
          <React.Fragment>
            <SubscribeBtn onClick={() => changeView('detail')}>
              <SubscribeIcon src={`${ICON_CMD}/header/more_subscribe.svg`} />
              订阅内容
            </SubscribeBtn>
            <Desc>可随时取消订阅</Desc>
          </React.Fragment>
        ) : (
          <Detail />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default Actions
