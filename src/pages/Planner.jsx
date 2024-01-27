import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Calendar from '../components/planner/Calendar'
import ThemeColor from '../components/ThemeColor'

export default function Planner() {
  const themeColor = ThemeColor();
  return (
    <div className={`${themeColor}`}>
    <Navbar />
    <div className='max-w-screen-xl mx-auto p-4'>
      <Calendar />
    </div>
    </div>
  )
}
