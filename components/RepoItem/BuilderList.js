import React from 'react'

import { Popover } from 'antd'
import { Wrapper, Builder, Avatar } from './styles/builder_list'

import { uid } from '../../utils'

const BuilderList = ({ entries }) => (
  <Wrapper>
    {entries.map(builder => (
      <Popover
        placement="bottom"
        trigger="hover"
        key={uid.gen()}
        content={
          <div>
            {builder.nickname}
            ...
          </div>
        }
      >
        <Builder>
          <Avatar src={builder.avatar} />
        </Builder>
      </Popover>
    ))}
  </Wrapper>
)

export default BuilderList
