//
import React from 'react'

import { uid } from '../../utils'

import { Popover } from '../../components'
import { Wrapper, Builder, Avatar } from './styles/builder_list'

const BuilderList = ({ entries }) => {
  return (
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
}

export default BuilderList
