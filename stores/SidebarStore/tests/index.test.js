/*
* SidebarStore store test
*
*/

import R from 'ramda'

import RootStore from '../../RootStore'
import SidebarStore from '../index'

it('sidebar store create, init menuItems = 0', () => {
  const sidebar = SidebarStore.create({})
  const menuItems = sidebar.menuItems.toJSON()

  expect(menuItems.length).toBe(0)
})

it('after rootStore create, sidebar menuItems should = communities count', () => {
  const rootStore = RootStore.create({ appLangs: {} })

  const communitiesCount = R.length(R.values(rootStore.communities.all))
  expect(rootStore.sidebar.menuItems.length).toBe(communitiesCount)
})
