/*
 * MenuItem store
 *
 */

import { types as t } from 'mobx-state-tree'

const Query = t.model('Query', {
  name: t.string,
})

const Href = t.model('Href', {
  pathname: t.string,
  query: Query,
})

const As = t.model('As', {
  pathname: t.string,
})

const ItemTarget = t.model('ItemTarget', {
  href: Href,
  as: As, // t.map(As),
})

const MenuItem = t.model('MenuItem', {
  //  id: t.number, // identifier(),
  name: t.string,
  target: ItemTarget,
})

export default MenuItem
