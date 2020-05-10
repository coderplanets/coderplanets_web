import React from 'react'

import { Wrapper, TextWrapper, Cover } from './styles/content'

const Content = ({ contentType, cover, desc }) => {
  switch (contentType) {
    case 'text': {
      return (
        <TextWrapper>
          {desc}, djifek d djifek idfk d fjdekj idfkjei dfkejife dfjei
        </TextWrapper>
      )
    }

    default:
      return (
        <Wrapper>
          <Cover src={cover} />
        </Wrapper>
      )
  }
}

export default React.memo(Content)
