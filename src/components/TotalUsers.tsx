import React from 'react'
import { createReducer } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { useSelector } from "react-redux"

export default function TotalUsers() {
    const count = useSelector((state: RootState)=> state.user.count)
  return (
    <>
      {count > 0 && <h3 className='text-center pt-2'>Total users {count}</h3>}
    </>
  )
}
