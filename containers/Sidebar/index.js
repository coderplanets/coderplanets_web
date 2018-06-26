/*
 *
 * Sidebar
 *
 */

import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { TrendLine } from '../../components'
import { makeDebugger, storePlug } from '../../utils'
import PinButton from './PinButton'
import {
  Sidebar,
  MenuItem,
  MenuRow,
  MenuItemWrapper,
  MenuItemEach,
  MenuItemIcon,
  MiniChartWrapper,
  /* MiniChartBar, */
  /* MiniChartText, */
} from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,
})

const MenuList = ({ items, pin, activeRaw }) => {
  /* const sparkData = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0] */
  // const sparkData = [0, 0, 0, 1, 0, 0, 1]
  const listItems = (
    <DragDropContext onDragEnd={debug}>
      <Droppable droppableId="droppable">
        {provided => (
          <div ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.raw} draggableId={item.raw} index={index}>
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
                        <div onClick={logic.onCommunitySelect.bind(this, item)}>
                          <MenuRow
                            pin={pin}
                            active={activeRaw === R.toLower(item.raw)}
                          >
                            <MenuItemIcon
                              active={activeRaw === R.toLower(item.raw)}
                              src={item.logo}
                            />
                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                            <div style={{ marginRight: 10 }} />
                            <a style={{ textDecoration: 'none' }}>
                              {item.title}
                            </a>

                            <MiniChartWrapper pin={pin}>
                              <TrendLine
                                data={item.contributesDigest}
                                duration={300}
                                radius={15}
                                width={7}
                              />
                            </MiniChartWrapper>
                          </MenuRow>
                        </div>
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
  return <MenuItem>{listItems}</MenuItem>
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class SidebarContainer extends React.Component {
  componentDidMount() {
    logic.init(this.props.sidebar)
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    /*
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )
    this.setState({
      items,
    })
    */

    this.setState(prevState => ({
      items: reorder(
        prevState.items,
        result.source.index,
        result.destination.index
      ),
    }))
  }

  render() {
    const { sidebar } = this.props
    const {
      curCommunity: { community },
      pin,
      subscribedCommunities,
    } = sidebar
    //    onMouseLeave={logic.leaveSidebar}
    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    const activeRaw = community.raw

    return (
      <Sidebar pin={pin}>
        <PinButton pin={pin} onClick={logic.pin} />
        <br />
        <br />
        <MenuList
          items={subscribedCommunities}
          pin={pin}
          activeRaw={activeRaw}
        />
      </Sidebar>
    )
  }
}

export default inject(storePlug('sidebar'))(observer(SidebarContainer))
