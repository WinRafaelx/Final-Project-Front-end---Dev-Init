import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Calendar from '../components/planner/Calendar'

export default function Planner() {
  return (
    <>
    <Navbar />
    <div className='max-w-screen-xl mx-auto p-4'>
      <Calendar />
    </div>
    </>
  )
}
