import { FC, memo, useState } from 'react'

import Button from '@/widgets/Buttons/Button'
import { Wrapper, CatsWrapper, Hint } from '../styles/tags/category_selector'

const TagCats = [
  {
    title: '分组 1',
    raw: '1',
  },
  {
    title: '分组 2',
    raw: '2',
  },
  {
    title: '分组 3',
    raw: '3',
  },
  // {
  //   title: '分组 4',
  //   raw: '4',
  // },
  // {
  //   title: '分组 5',
  //   raw: '5',
  // },
  // {
  //   title: '分组 6',
  //   raw: '6',
  // },
  // {
  //   title: '分组 7',
  //   raw: '7',
  // },
  // {
  //   title: '分组 8',
  //   raw: '8',
  // },
]

type TProps = {
  testid?: string
}

const CategorySelector: FC<TProps> = () => {
  const [cat, setCat] = useState('0')

  return (
    <Wrapper>
      <Hint>标签分组:</Hint>
      <CatsWrapper>
        <Button
          ghost
          size="small"
          noBorder={cat !== '0'}
          onClick={() => setCat('0')}
        >
          全部
        </Button>

        {TagCats.map((item) => (
          <Button
            key={item.raw}
            ghost
            size="small"
            noBorder={cat !== item.raw}
            onClick={() => setCat(item.raw)}
          >
            {item.title}
          </Button>
        ))}
      </CatsWrapper>
    </Wrapper>
  )
}

export default memo(CategorySelector)
