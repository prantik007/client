import React from 'react'
import {Button} from '@mui/material'
const ButtonCustom = ({children,size,variant,startIcon}) => {
  return (
    <Button size={size} variant={variant} startIcon={startIcon}>{children}</Button>
  )
}

export default ButtonCustom