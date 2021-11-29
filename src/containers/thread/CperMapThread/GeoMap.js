import React from 'react'
import ReactResizeDetector from 'react-resize-detector'

import uid from '@/utils/uid'
import { buildLog } from '@/utils/logger'

import fetchGeoData from './geo_data'

import { MapWrapper, RealMap, NoticeWrapper, TheLink } from './styles'

// TODO import it globaly, g2 is too big to load in time (> 400KB)
// import G2 from 'g2'

/* eslint-disable-next-line */
const log = buildLog('c:LocationMap')

class LocationMap extends React.Component {
  constructor(props) {
    super(props)
    this.chart = null
    // if id start with number, is not valid
    // see https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
    this.chartId = `id-${uid.gen()}`

    const { curTheme } = props
    this.curTheme = curTheme
  }

  componentDidMount() {
    try {
      this.initG2()
    } catch (e) {
      // TODO: tell toast
      log('G2 is not load', e)
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.curTheme !== this.curTheme) {
      this.curTheme = nextProps.curTheme

      this.chart.destroy()
      setTimeout(() => {
        this.initG2()
      }, 500)

      setTimeout(() => {
        const curWidth = document.getElementById(this.chartId).offsetWidth
        this.onResize(curWidth)
      }, 1500)

      return false
    }
    return true
  }

  onResize(width) {
    const newWidth = Math.ceil(width)
    const height = Math.ceil(newWidth * 0.625)

    if (this.chart) this.chart.changeSize(newWidth, height)
  }

  /* eslint-disable no-undef */
  configG2() {
    G2.track(false)

    this.chart.forceFit()
    // animate it's to "dragy"
    this.chart.animate(false)
    this.chart.legend(false)
    this.chart.tooltip({ title: null })

    this.chart.coord('map', {
      projection: 'albers',
      basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
      max: [16.573, -13.613], // 指定投影后最大的坐标点
      min: [-27.187, -49.739], // 指定投影后最小的坐标点
    })
  }

  initG2() {
    const { theme } = this.props

    const {
      geoMap: {
        oceanColor,
        regionBg,
        restRegionBg,
        borderStroke,
        markerBg,
        markerShadow,
      },
    } = theme

    const { Stat } = G2

    fetchGeoData()
      .then((mapData) => {
        const map = []
        const { features } = mapData
        for (let i = 0; i < features.length; i += 1) {
          const { name } = features[i].properties
          map.push({ name })
        }

        this.chart = new G2.Chart({
          id: this.chartId,
          height: 500,
          plotCfg: {
            margin: [10, 105],
            border: {
              fill: oceanColor,
            },
          },
        })

        this.configG2()

        const bgView = this.chart.createView()
        bgView.source(map)
        bgView.tooltip(false)
        bgView.axis(false)
        bgView
          .polygon()
          .position(Stat.map.region('name', mapData))
          .color('name', (val) => {
            if (val === 'China') {
              return regionBg
            }
            return restRegionBg
          })
          .style({
            stroke: borderStroke,
            lineWidth: 1,
          })

        const pointView = this.chart.createView()

        const { markers } = this.props
        pointView.source(markers, {
          value: { alias: '人数' },
          city: { alias: '城市' },
        })
        pointView
          .point()
          .position(Stat.map.location('long*lant'))
          .size('value', 12, 1)
          .color('value', () => markerBg)
          .tooltip('city*value')
          .shape('value', () => 'circle')
          .style({
            shadowBlur: 5,
            shadowColor: markerShadow,
          })
        this.chart.render()
      })
      .catch((ex) => log('parsing failed', ex))
  }

  /* eslint-enable no-undef */
  render() {
    return (
      <MapWrapper>
        <ReactResizeDetector
          handleWidth
          refreshMode="debounce"
          refreshRate={500}
          skipOnMount={false}
          querySelector={`#${this.chartId}`}
          onResize={(width) => this.onResize(width)}
        />
        <RealMap id={this.chartId} />
        <NoticeWrapper>
          地理数据由注册用户 IP
          地址根据第三方地图服务商获得（港澳台地区地区可能会有误差，不涉及任何政治立场）。由科学上网等因素导致的误差后期会专门提供手动矫正措施。全球范围内的访问数据可通过
          <TheLink
            href="https://plausible.io/coderplanets.com/countries"
            target="_blank"
          >
            这里查看
          </TheLink>
          。
        </NoticeWrapper>
      </MapWrapper>
    )
  }
}

export default LocationMap

/*
   fetch('http://antvis.github.io/static/data/china-pm.json')
   .then(response => response.json())
   .then(data => {})
 */
