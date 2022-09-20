import { FC } from 'react'
import Link from 'next/link'

import { Wrapper, Note, Addr } from '../styles/desktop_view/simple_layout'

const SimpleLayout: FC = () => {
  return (
    <Wrapper>
      <Note>
        由<Addr>Groupher</Addr>
        提供服务
      </Note>
      <Note>
        <Link href="http://beian.miit.gov.cn" passHref>
          <Addr>蜀ICP备17043722号-4</Addr>
        </Link>
      </Note>
      <br />
    </Wrapper>
  )
}

export default SimpleLayout
