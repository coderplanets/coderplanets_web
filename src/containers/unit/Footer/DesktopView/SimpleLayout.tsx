import { FC } from 'react'
import Link from 'next/link'

import { Wrapper, Note, Addr } from '../styles/desktop_view/simple_layout'

const SimpleLayout: FC = () => {
  return (
    <Wrapper>
      <Note>
        由{' '}
        <Link href="https://groupher.com" passHref>
          <Addr>Groupher</Addr>
        </Link>{' '}
        提供支持
      </Note>
    </Wrapper>
  )
}

export default SimpleLayout
