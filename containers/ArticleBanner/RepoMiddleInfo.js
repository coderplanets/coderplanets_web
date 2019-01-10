import React from 'react'

// import { ICON_CMD } from '../../config'
import {
  Wrapper,
  DescriptionWrapper,
  HomepageLink,
} from './styles/repo_middle_info'

const RepoMiddleInfo = ({ data }) => {
  console.log('RepoMiddleInfo data: ', data)
  return (
    <Wrapper>
      <DescriptionWrapper>
        {data.desc}
        <HomepageLink>{data.homepageUrl}</HomepageLink>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default RepoMiddleInfo
