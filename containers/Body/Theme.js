import React from 'react'
import styled from 'styled-components'

import * as logic from './logic'
import Button from './Button'
import A from '../../components/A'
import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'

const Desc = styled.div`
  color: ${props => props.theme.font};
  font-size: 2vh;
  transition: color 0.3s;
`
const Theme = () => {
  return (
    <HorizontalCenter>
      <Center>
        <Title>主题</Title>
        <br />
        <Desc>
          得益于{' '}
          <A href="https://github.com/MicheleBertoli/css-in-js">
            css-in-js
          </A>{' '}
          的先进理念以及{' '}
          <A href="https://www.styled-components.com/">
            styled-components
          </A>{' '}
          的优雅实现, 主题可在几乎不增加项目复杂度的情况下按需求轻松扩展。 内置四套主题如下：
        </Desc>
        <br />
        <Button onClick={logic.changeTheme.bind(this, 'default')}>
          default
        </Button>
        <Button onClick={logic.changeTheme.bind(this, 'cyan')}>Cyan</Button>
      </Center>
    </HorizontalCenter>
  )
}

export default Theme
