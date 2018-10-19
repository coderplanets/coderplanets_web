import React from 'react'

import { DotDivider } from '../../components'
import { Wrapper, Salary, Text } from './styles/middle_info'

const MiddleInfo = () => (
  <Wrapper>
    <Salary>15k-25k</Salary>
    <DotDivider />
    <Text>本科</Text>
    <DotDivider />
    <Text>经验: 3-5年</Text>
  </Wrapper>
)

export default MiddleInfo
