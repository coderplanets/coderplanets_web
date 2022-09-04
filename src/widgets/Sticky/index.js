/*
 *
 * Sticky
 * this code is on github:
 * https://github.com/codecks-io/react-sticky-box/blob/master/src/index.js
 * copy here for reduce the final bundle size
 *
 */

import React from 'react'
import T from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'

import { buildLog } from '@/utils/logger'
import { Global } from '@/utils/helper'

const log = buildLog('w:Sticky')

const getScrollParent = (node) => {
  let parent = node
  // eslint-disable-next-line no-cond-assign
  while ((parent = parent.parentElement)) {
    const overflowYVal = getComputedStyle(parent, null).getPropertyValue(
      'overflow-y',
    )
    if (parent === document.body) return Global
    if (overflowYVal === 'auto' || overflowYVal === 'scroll') return parent
  }
  return Global
}

const offsetTill = (node, target) => {
  let current = node
  let offset = 0
  // If target is not an offsetParent itself, subtract its offsetTop and set correct target
  if (target.firstChild?.offsetParent !== target) {
    offset += node.offsetTop - target.offsetTop
    target = node.offsetParent
    offset += -node.offsetTop
  }
  do {
    offset += current.offsetTop
    current = current.offsetParent
  } while (current && current !== target)
  return offset
}

let stickyProp = null
if (typeof CSS !== 'undefined' && CSS.supports) {
  if (CSS.supports('position', 'sticky')) stickyProp = 'sticky'
  else if (CSS.supports('position', '-webkit-sticky')) {
    stickyProp = '-webkit-sticky'
  }
}

// Inspired by https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let passiveArg = false
try {
  const opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line getter-return
    get() {
      passiveArg = { passive: true }
    },
  })
  if (Global.addEventListener) {
    Global.addEventListener('testPassive', null, opts)
    Global.removeEventListener('testPassive', null, opts)
  }
} catch (e) {
  log(e)
}

class StickyBox extends React.Component {
  constructor(props) {
    super(props)

    this.unsubscribes = []
  }

  addListener = (element, event, handler, passive) => {
    element.addEventListener(event, handler, passive)
    this.unsubscribes.push(() => element.removeEventListener(event, handler))
  }

  addResizeObserver = (node, handler) => {
    const ro = new ResizeObserver(handler)
    ro.observe(node)
    this.unsubscribes.push(() => ro.disconnect())
  }

  registerContainerRef = (n) => {
    if (!stickyProp) return
    this.node = n
    if (n) {
      this.scrollPane = getScrollParent(this.node)
      this.latestScrollY =
        this.scrollPane === Global ? Global.scrollY : this.scrollPane.scrollTop

      this.addListener(this.scrollPane, 'scroll', this.handleScroll, passiveArg)
      this.addListener(
        this.scrollPane,
        'mousewheel',
        this.handleScroll,
        passiveArg,
      )
      if (this.scrollPane === Global) {
        this.addListener(Global, 'resize', this.handleWindowResize)
        this.handleWindowResize()
      } else {
        this.addResizeObserver(this.scrollPane, this.handleScrollPaneResize)
        this.handleScrollPaneResize()
      }
      this.addResizeObserver(this.node.parentNode, this.handleParentNodeResize)
      this.handleParentNodeResize()

      this.addResizeObserver(this.node, this.handleNodeResize)
      this.handleNodeResize({ initial: true })

      this.initial()
    } else {
      this.unsubscribes.forEach((fn) => fn())
      this.unsubscribes = []
      this.scrollPane = null
    }
  }

  changeMode(newMode) {
    const { onChangeMode, offsetTop, offsetBottom, bottom } = this.props
    if (this.mode !== newMode) onChangeMode(this.mode, newMode)
    this.mode = newMode
    if (newMode === 'relative') {
      this.node.style.position = 'relative'
      if (bottom) {
        const nextBottom = Math.max(
          0,
          this.parentHeight - this.nodeHeight - this.offset,
        )
        this.node.style.bottom = `${nextBottom}px`
      } else {
        this.node.style.top = `${this.offset}px`
      }
    } else {
      this.node.style.position = stickyProp
      if (newMode === 'stickyBottom') {
        if (bottom) {
          this.node.style.bottom = `${offsetBottom}px`
        } else {
          this.node.style.top = `${
            this.viewPortHeight - this.nodeHeight - offsetBottom
          }px`
        }
      } else {
        // stickyTop
        // eslint-disable-next-line no-lonely-if
        if (bottom) {
          this.node.style.bottom = `${
            this.viewPortHeight - this.nodeHeight - offsetBottom
          }px`
        } else {
          this.node.style.top = `${offsetTop}px`
        }
      }
    }
    this.offset = this.getCurrentOffset()
  }

  initial() {
    const { bottom } = this.props
    if (bottom) {
      if (this.mode !== 'stickyBottom') this.changeMode('stickyBottom')
    } else if (this.mode !== 'stickyTop') {
      this.changeMode('stickyTop')
    }
  }

  getCurrentOffset = () => {
    if (this.mode === 'relative') return this.offset
    const { offsetTop, offsetBottom } = this.props
    if (this.mode === 'stickyTop') {
      return Math.max(
        0,
        this.scrollPaneOffset +
          this.latestScrollY -
          this.naturalTop +
          offsetTop,
      )
    }
    if (this.mode === 'stickyBottom') {
      return Math.max(
        0,
        this.scrollPaneOffset +
          this.latestScrollY +
          this.viewPortHeight -
          (this.naturalTop + this.nodeHeight + offsetBottom),
      )
    }
  }

  changeToStickyBottomIfBoxTooLow(scrollY) {
    const { offsetBottom } = this.props
    if (
      scrollY + this.scrollPaneOffset + this.viewPortHeight >=
      this.naturalTop + this.nodeHeight + this.offset + offsetBottom
    ) {
      this.changeMode('stickyBottom')
    }
  }

  handleWindowResize = () => {
    this.viewPortHeight = Global.innerHeight
    this.scrollPaneOffset = 0
    this.handleScroll()
  }

  handleScrollPaneResize = () => {
    this.viewPortHeight = this.scrollPane.offsetHeight
    if (process.env.NODE_ENV !== 'production' && this.viewPortHeight === 0) {
      log(
        'react-sticky-box scroll pane has a height of 0. This seems odd. Please check this node:',
        this.scrollPane,
      )
    }
    // Only applicable if scrollPane is an offsetParent
    if (this.scrollPane.firstChild.offsetParent === this.scrollPane) {
      this.scrollPaneOffset = this.scrollPane.getBoundingClientRect().top
    } else {
      this.scrollPaneOffset = 0
    }
    this.handleScroll()
  }

  handleParentNodeResize = () => {
    const { parentNode } = this.node
    const computedParentStyle = getComputedStyle(parentNode, null)
    const parentPaddingTop = parseInt(
      computedParentStyle.getPropertyValue('padding-top'),
      10,
    )
    const parentPaddingBottom = parseInt(
      computedParentStyle.getPropertyValue('padding-bottom'),
      10,
    )
    const verticalParentPadding = parentPaddingTop + parentPaddingBottom
    this.naturalTop =
      offsetTill(parentNode, this.scrollPane) +
      parentPaddingTop +
      this.scrollPaneOffset
    const oldParentHeight = this.parentHeight
    this.parentHeight =
      parentNode.getBoundingClientRect().height - verticalParentPadding

    if (this.mode === 'relative') {
      const { bottom } = this.props
      if (bottom) {
        this.changeMode('relative')
      } else if (oldParentHeight > this.parentHeight) {
        // If parent height decreased...
        this.changeToStickyBottomIfBoxTooLow(this.latestScrollY)
      }
    }
    if (oldParentHeight !== this.parentHeight && this.mode === 'relative') {
      this.latestScrollY = Number.POSITIVE_INFINITY
      this.handleScroll()
    }
  }

  handleNodeResize = ({ initial } = {}) => {
    const prevHeight = this.nodeHeight
    this.nodeHeight = this.node.getBoundingClientRect().height
    if (!initial && prevHeight !== this.nodeHeight) {
      const { offsetTop, offsetBottom, bottom } = this.props
      if (this.nodeHeight + offsetTop + offsetBottom <= this.viewPortHeight) {
        // Just make it sticky if node smaller than viewport
        this.mode = undefined
        this.initial()
      } else {
        const diff = prevHeight - this.nodeHeight
        const lowestPossible = this.parentHeight - this.nodeHeight
        const nextOffset = Math.min(
          lowestPossible,
          this.getCurrentOffset() + (bottom ? diff : 0),
        )
        this.offset = Math.max(0, nextOffset)
        if (!bottom || this.mode !== 'stickyBottom') this.changeMode('relative')
      }
    }
  }

  handleScroll = () => {
    const { offsetTop, offsetBottom } = this.props
    const scrollY =
      this.scrollPane === Global ? Global.scrollY : this.scrollPane.scrollTop
    if (scrollY === this.latestScrollY) return
    if (this.nodeHeight + offsetTop + offsetBottom <= this.viewPortHeight) {
      // Just make it sticky if node smaller than viewport
      this.initial()
      this.latestScrollY = scrollY
      return
    }
    const scrollDelta = scrollY - this.latestScrollY
    this.offset = this.getCurrentOffset()
    if (scrollDelta > 0) {
      // scroll down
      if (this.mode === 'stickyTop') {
        if (scrollY + this.scrollPaneOffset + offsetTop > this.naturalTop) {
          if (
            scrollY + this.scrollPaneOffset + this.viewPortHeight <=
            this.naturalTop + this.nodeHeight + this.offset + offsetBottom
          ) {
            this.changeMode('relative')
          } else {
            this.changeMode('stickyBottom')
          }
        }
      } else if (this.mode === 'relative') {
        this.changeToStickyBottomIfBoxTooLow(scrollY)
      }
    } else {
      // scroll up
      // eslint-disable-next-line no-lonely-if
      if (this.mode === 'stickyBottom') {
        if (
          this.scrollPaneOffset + scrollY + this.viewPortHeight <
          this.naturalTop + this.parentHeight + offsetBottom
        ) {
          if (
            this.scrollPaneOffset + scrollY + offsetTop >=
            this.naturalTop + this.offset
          ) {
            this.changeMode('relative')
          } else {
            this.changeMode('stickyTop')
          }
        }
      } else if (this.mode === 'relative') {
        if (
          this.scrollPaneOffset + scrollY + offsetTop <
          this.naturalTop + this.offset
        ) {
          this.changeMode('stickyTop')
        }
      }
    }

    this.latestScrollY = scrollY
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={className} ref={this.registerContainerRef}>
        {children}
      </div>
    )
  }
}

StickyBox.propTypes = {
  children: T.node.isRequired,
  onChangeMode: T.func,
  offsetTop: T.number,
  offsetBottom: T.number,
  bottom: T.bool,
  className: T.string,
}

StickyBox.defaultProps = {
  onChangeMode: () => {
    /* TODO */
  },
  offsetTop: 0,
  offsetBottom: 0,
  bottom: false,
  className: '',
}

export default StickyBox
