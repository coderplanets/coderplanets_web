import React from 'react'

import { DotDivider } from '../../components'
import CityList from './CityList'
import { Wrapper, Salary, Text } from './styles/middle_info'

const MiddleInfo = ({ data }) => (
  <Wrapper>
    <Salary>{data.salary}</Salary>
    <DotDivider />
    <Text>{data.education}</Text>
    <DotDivider />
    <Text>
      经验
      {data.exp}
    </Text>
    <DotDivider />
    <CityList data={data.tags} />
  </Wrapper>
)

export default MiddleInfo
