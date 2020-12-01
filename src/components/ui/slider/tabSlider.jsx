import React, { useState } from 'react'
import { Title } from '..'
import {
  StyledSliderContainer,
  StyledSlider,
  StyledSliderTitle,
  StyledTabSlide,
  StyledSlideTabList,
  StyledSlideTab
} from './styled'
import { colours } from '../../../styles'

const { cream } = colours

export const TabSlider = ({ children, height, $light, tabs, title }) => {
  const [slide, setSlide] = useState(0)

  return (
    <StyledSliderContainer>
      <StyledSlider {...{ height, $light }}>
        {children.map((item, index) => (
          <StyledTabSlide key={index} active={index === slide}>
            {item}
          </StyledTabSlide>
        ))}
      </StyledSlider>
      <StyledSliderTitle>
        <Title data-aos='fade-in' level={2} color={cream}>
          {title}
        </Title>
      </StyledSliderTitle>
      <StyledSlideTabList>
        {tabs.map((tab, index) => (
          <StyledSlideTab
            active={slide === index}
            key={index}
            onClick={() => setSlide(index)}
          >
            {tab}
          </StyledSlideTab>
        ))}
      </StyledSlideTabList>
    </StyledSliderContainer>
  )
}
