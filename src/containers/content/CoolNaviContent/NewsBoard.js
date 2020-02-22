import React from 'react'

import FeedsBar from '@components/FeedsBar'

const NewsBoard = () => {
  return (
    <React.Fragment>
      <FeedsBar title="国外社区动态" numIndex={0} />
      <FeedsBar title="国内社区动态" numIndex={1} />
      <FeedsBar title="象牙塔" numIndex={2} />
      <FeedsBar title="独立博客" numIndex={3} />
      <FeedsBar title="团队博客" numIndex={4} />
      <FeedsBar title="播客" numIndex={5} />
    </React.Fragment>
  )
}

export default NewsBoard
