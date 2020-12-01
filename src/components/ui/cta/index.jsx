import React from 'react'
import { Title, Paragraph } from '..'
import {
  StyledButton,
  StyledCtaSection,
  StyledLink,
  StyledLinkButton
} from './styled'

export const Button = ({ onClick, type, $outline, $light, $disabled, children }) => (
  <StyledButton data-aos='fade-in' {...{ onClick, type, $outline, $light, $disabled }}>{children}</StyledButton>
)

export const LinkButton = ({ cta, link, $outline, $light }) => (
  <StyledLinkButton to={link} data-aos='fade-in' {...{ $outline, $light }}>{cta}</StyledLinkButton>
)

export const BodyLink = ({ color, children }) => (
  <StyledLink {...{ color }}>{children}</StyledLink>
)

export const CallToAction = ({ level, title, blurb, cta, link, $light, $outline }) => (
  <StyledCtaSection>
    <Title data-aos='fade-in' {...{ level }}>
      {title}
    </Title>
    <Paragraph data-aos='fade-in'>{blurb}</Paragraph>
    {link ? (
      <LinkButton {...{ cta, link, $outline, $light }} />
    ) : (
      <Button $disabled {...{ $outline, $light }}>{cta}</Button>
    )}
  </StyledCtaSection>
)
