/*
* SidebarStore store test
*
*/

import SidebarStore from './index'

it('sidebar store create', () => {
  const sidebar = SidebarStore.create({}, {})

  expect(sidebar.menuItems.length).toBe(0)

  sidebar.loadAllMenuItem()
  expect(sidebar.menuItems.length).toBe(5)
})
