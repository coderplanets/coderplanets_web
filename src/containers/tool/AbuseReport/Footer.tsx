import React from 'react'

import { YesOrNoButtons } from '@/components/Buttons'

import { Wrapper } from './styles/footer'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <YesOrNoButtons confirmText="举报" />
    </Wrapper>
  )
}

export default Footer
