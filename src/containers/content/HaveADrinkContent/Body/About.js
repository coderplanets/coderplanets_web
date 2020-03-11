/*
 *
 * HaveADrink Body
 *
 */

import React from 'react'

import { Wrapper, Title, Body } from '../styles/body/about'

const About = () => {
  return (
    <Wrapper>
      <Title>关于『来一杯』</Title>
      <Body>
        以前一直觉得开3系的人都是花30万买个车标的装逼犯，动不动就说什么“人车合一”张口闭口谈操控，要不要这么假啊。巴伐利亚拖拉机厂骗钱的小玩意儿，老子的大尼桑还不是照样开得飞起，只要哥愿意分分钟把你秒成渣……哈哈，有点夸张，总之就是各种看不起3系。直到前段时间亲戚买了一辆，机缘巧合我正好拿着开了几天……其实不用几天，握着方向起步的一瞬间就已经能感觉出来宝马的行驶质感比普通B级车细腻得多，然后在省道上转过第一个急弯我才知道所谓“车的操控感”并不是一个虚无缥缈的东西……
      </Body>
    </Wrapper>
  )
}

export default React.memo(About)
