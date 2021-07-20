import { FC, memo } from 'react'

import { ICON, ICON_BASE } from '@/config'
import { Wrapper, Tech, Logo, Name } from '../styles/works_sticker/tech_stacks'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const tmpList = [
  {
    id: '1',
    name: 'elixir',
    logo: `${ICON_BASE}/pl/elixir.svg`,
  },
  {
    id: '2',
    name: 'javascript',
    logo: `${ICON_BASE}/pl/javascript.svg`,
  },
  {
    id: '3',
    name: 'php',
    logo: `${ICON_BASE}/pl/php.svg`,
  },
  {
    id: '4',
    name: 'ts',
    logo: `${ICON_BASE}/pl/typescript.svg`,
  },
  {
    id: '5',
    name: 'clojure',
    logo: `${ICON_BASE}/pl/clojure.svg`,
  },
  {
    id: '6',
    name: 'java',
    logo: `${ICON_BASE}/pl/java.svg`,
  },
  {
    id: '7',
    name: 'react',
    logo: `${ICON_BASE}/framework/react.svg`,
  },
]

const TechStacks: FC = () => {
  return (
    <Wrapper>
      {tmpList.map((item) => (
        <Tech key={item.id}>
          <Logo src={item.logo} />
          <Name>{item.name}</Name>
        </Tech>
      ))}
    </Wrapper>
  )
}

export default memo(TechStacks)
