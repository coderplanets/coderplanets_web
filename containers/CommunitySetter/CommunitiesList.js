import React from 'react'

// import { ICON_CMD } from 'config'
import Pagi from 'components/Pagi'
import Community from './Community'

import { Wrapper, EntriesWrapper } from './styles/communities_list'

const CommunitiesList = ({
  data: { entries, pageNumber, pageSize, totalCount },
}) => (
  <Wrapper>
    <EntriesWrapper>
      {entries.map(item => (
        <Community key={item.id} entry={item} />
      ))}
    </EntriesWrapper>
    <Pagi
      left="-20px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={console.log}
    />
  </Wrapper>
)

export default CommunitiesList
