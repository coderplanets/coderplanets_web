import React from 'react'

import ReactionNumbers from '../ReactionNumbers'
import {
  Wrapper,
  AuthorInfo,
  Avatar,
  Name,
} from '../styles/mobile_view/info_bar'

const InfoBar = ({ viewingData, starLoading, favoriteLoading, showStar }) => {
  return (
    <Wrapper>
      <ReactionNumbers
        data={viewingData}
        starLoading={starLoading}
        favoriteLoading={favoriteLoading}
        showStar={showStar}
      />
      <AuthorInfo>
        <Avatar src={viewingData.author?.avatar} />
        <Name>{viewingData.author?.nickname}</Name>
      </AuthorInfo>
    </Wrapper>
  )
}

export default React.memo(InfoBar)
