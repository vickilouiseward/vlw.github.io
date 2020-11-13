import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { StyledContainer, StyledSection, StyledFormSection } from './styled'
import { Button, Title, Paragraph, Form, Input } from '../..'

export const Newsletter = ({ title, text }) => {
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, errors } = useForm() // initialize the hook
  const onSubmit = async (formData) => {
    try {
      await axios.post('https://fqthev84y8.execute-api.eu-west-1.amazonaws.com/dev/', formData)
      setSuccess(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledContainer>
      <StyledSection>
        <Title level={2}>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </StyledSection>
      {success ? (
        <Paragraph>Thank you for signing up!</Paragraph>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledFormSection>
            <Input
              label='Name'
              field='name'
              register={register({ required: true })}
              error={errors.name && 'Please enter your name'}
            />
            <Input
              label='Email address'
              field='email' type='email'
              register={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              error={errors.email && 'Please enter a valid email address'}
            />
            <Button type='submit'>Sign up</Button>
          </StyledFormSection>
        </Form>
      )}

    </StyledContainer>
  )
}
