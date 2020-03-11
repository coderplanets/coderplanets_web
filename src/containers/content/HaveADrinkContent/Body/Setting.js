import React from 'react'

import {
  Wrapper,
  Divider,
  Block,
  Title,
  ItemsWrapper,
  Item,
} from '../styles/body/setting'

import { setSetting } from '../logic'

const Setting = ({ settingOptions: { animateType, fontSize } }) => {
  return (
    <Wrapper>
      <Block>
        <Title>动画效果</Title>
        <ItemsWrapper>
          <Item
            active={animateType === 'fade'}
            onClick={() => setSetting('animateType', 'fade')}
          >
            渐隐
          </Item>
          <Item
            active={animateType === 'bounce'}
            onClick={() => setSetting('animateType', 'bounce')}
          >
            果冻
          </Item>
        </ItemsWrapper>
      </Block>
      <Divider />
      <Block>
        <Title>字体大小</Title>
        <ItemsWrapper>
          <Item
            active={fontSize === '27px'}
            onClick={() => setSetting('fontSize', '27px')}
          >
            较大
          </Item>
          <Item
            active={fontSize === '24px'}
            onClick={() => setSetting('fontSize', '24px')}
          >
            正常
          </Item>
        </ItemsWrapper>
      </Block>
    </Wrapper>
  )
}

export default React.memo(Setting)
