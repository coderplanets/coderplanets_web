import React from 'react'
import { ArrowButton } from '@/components/Buttons'

// import { ICON_CMD } from '@/config'
import {
  Wrapper,
  Title,
  Num,
  More,
} from '../../styles/digest_view/row_view/sub_title'

const SubTitle = ({ title, num }) => {
  return (
    <Wrapper>
      <Title>
        {title}
        <Num>{num}</Num>
      </Title>
      <More>
        <ArrowButton size="tiny" arrowStyle="simple" dimWhenIdle>
          查看
        </ArrowButton>
      </More>
    </Wrapper>
  )
}

export default React.memo(SubTitle)
