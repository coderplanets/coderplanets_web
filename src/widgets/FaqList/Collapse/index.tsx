import { FC, memo, useState, useCallback, useEffect } from 'react'
import { isEmpty, includes, reject, pluck } from 'ramda'

import type { TID, TMenuOption } from '@/spec'

import { MENU, DEFAULT_MENU } from './constant'

import Banner from './Banner'
import Section from './Section'

import { Wrapper, Footer, MoreLink } from '../styles/collapse'

import type { TProps as TIndex } from '../index'

type TProps = Pick<TIndex, 'articles'>

const Collapse: FC<TProps> = ({ articles }) => {
  const [openedIDs, setOpenedIDs] = useState<TID[]>([])
  const [menuOptions, setMenuOptions] = useState<TMenuOption[]>(DEFAULT_MENU)

  useEffect(() => {
    const articleIds = pluck('id', articles)
    if (isEmpty(openedIDs)) {
      setMenuOptions([MENU.UNFOLD_ALL, MENU.AUTH_EDIT])
    } else if (openedIDs.length === articleIds.length) {
      setMenuOptions([MENU.FOLD_ALL, MENU.AUTH_EDIT])
    } else {
      setMenuOptions(DEFAULT_MENU)
    }
  }, [openedIDs, articles])

  // fold/unfold one item
  const toggle = useCallback(
    (id) => {
      includes(id, openedIDs)
        ? setOpenedIDs(reject((_id) => _id === id, openedIDs))
        : setOpenedIDs([id, ...openedIDs])
    },
    [openedIDs],
  )

  return (
    <Wrapper>
      <Banner
        menuOptions={menuOptions}
        setOpenedIDs={setOpenedIDs}
        articles={articles}
      />

      {articles.map((item) => (
        <Section
          key={item.id}
          item={item}
          openedIDs={openedIDs}
          toggle={toggle}
        />
      ))}

      <Footer>
        <div>如有其他疑问，请</div>
        <MoreLink>告诉我们</MoreLink>。
      </Footer>
    </Wrapper>
  )
}

export default memo(Collapse)
