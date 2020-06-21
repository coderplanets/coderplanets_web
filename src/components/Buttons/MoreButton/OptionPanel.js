import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  Block,
  Icon,
  Intro,
  Title,
  Desc,
} from '../styles/more_button/option_panel'

const OptionPanel = ({ options, onClick }) => {
  return (
    <Wrapper>
      {options.map((item, index) => (
        <Block key={item.key} onClick={() => onClick(item.key)}>
          {/* common_check icon is special, smaller than normal icons,
          and check icon is always the first icon */}
          <Icon src={item.icon} index={index} bigger={index === 0} />
          <Intro>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
          </Intro>
        </Block>
      ))}
    </Wrapper>
  )
}

OptionPanel.propTypes = {
  onClick: T.func,
  options: T.arrayOf(
    T.shape({
      title: T.stirng,
      desc: T.string,
      icon: T.string,
    }),
  ),
}

OptionPanel.defaultProps = {
  options: [],
  onClick: console.log,
}

export default React.memo(OptionPanel)
