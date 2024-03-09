'use client'

import Button from '@/app/Atoms/Button'
import InputComponent from '@/app/Atoms/Input'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <div>
      <InputComponent placeholder={'Insert email'}/>
      <InputComponent placeholder={'Insert Password'} type={'password'}/>
      <Button text='Login' type='regular'/>
      </div>

    </div>
  )
}
