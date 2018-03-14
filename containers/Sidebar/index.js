/*
 *
 * Sidebar
 *
 */

import React from 'react'
import Link from 'next/link'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { makeDebugger, storeSelector, getSVGIconPath } from '../../utils'
import PinButton from './PinButton'
import {
  Sidebar,
  MenuItem,
  MenuRow,
  MenuItemWrapper,
  MenuItemEach,
  MenuItemIcon,
  MiniChartWrapper,
  MiniChartBar,
  MiniChartText,
} from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,
})

const MenuList = ({ items, pin, curPath }) => {
  const listItems = (
    <DragDropContext onDragEnd={console.log}>
      <Droppable droppableId="droppable">
        {provided => (
          <div ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.name} draggableId={item.name} index={index}>
                {(provided, snapshot) => (
                  <MenuItemWrapper>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <MenuItemEach>
                        <Link href={item.target.href} as={item.target.as}>
                          <MenuRow
                            pin={pin}
                            active={curPath === R.toLower(item.name)}
                          >
                            <MenuItemIcon
                              active={curPath === R.toLower(item.name)}
                              path={getSVGIconPath(item.name)}
                            />
                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                            <div style={{ marginRight: 10 }} />
                            <a style={{ textDecoration: 'none' }}>
                              {item.name}
                            </a>
                            <MiniChartWrapper pin={pin}>
                              <MiniChartBar />
                              <MiniChartText>247</MiniChartText>
                            </MiniChartWrapper>
                          </MenuRow>
                        </Link>
                      </MenuItemEach>
                    </div>
                    {provided.placeholder}
                  </MenuItemWrapper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
  /*
  const listItems2 = items.map(item => (
    <li key={item.name}>
      <div>
        <Link href={item.target.href} as={item.target.as}>
          <MenuRow pin={pin} active={curPath === R.toLower(item.name)}>
            <MenuItemIcon
              active={curPath === R.toLower(item.name)}
              path={getSVGIconPath(item.name)}
            />
            <div style={{ marginRight: 10 }} />
            <a>{item.name}</a>
            <MiniChartWrapper pin={pin}>
              <MiniChartBar />
              <MiniChartText>247</MiniChartText>
            </MiniChartWrapper>
          </MenuRow>
        </Link>
      </div>
    </li>
  ))
  */
  return <MenuItem>{listItems}</MenuItem>

  /*
  return (
    <div>
      <Droppable
        type="fuck"
        droppableId="fuck"
        ignoreContainerClipping
        isDropDisabled
      >
        {(provided, snapshot) => (
          <ScrollContainer>
            <MenuItem>{listItems}</MenuItem>
          </ScrollContainer>
        )}
      </Droppable>
    </div>
  )
  */
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class SidebarContainer extends React.Component {
  componentDidMount() {
    debug('init')
    logic.init(this.props.sidebar)
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items,
    })
  }

  render() {
    const { sidebar } = this.props
    const { curPath, menuItems, pin } = sidebar
    //    onMouseLeave={logic.leaveSidebar}

    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    return (
      <Sidebar pin={pin}>
        <PinButton pin={pin} onClick={logic.pin} />
        <br />
        <br />
        <MenuList items={menuItems} pin={pin} curPath={curPath} />
      </Sidebar>
    )
  }
}

export default inject(storeSelector('sidebar'))(observer(SidebarContainer))
