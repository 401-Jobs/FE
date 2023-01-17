import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/slices/sampleSlice'
import Landing from '../components/LandingPage/Landing'

export const LandingPage = () => {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchUsers());
    });

  return (
    <div>
      <Landing />
    </div>
  )
}
