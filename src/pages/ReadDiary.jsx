import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ReadDiaryById from '../components/readDiary/ReadDiaryById'
import ThemeColor from '../components/ThemeColor'

export default function ReadDiary() {
  const themeColor = ThemeColor();
  return (
    <div className={`h-screen ${themeColor}`}>
    <Navbar />
    <div className='max-w-screen-xl mx-auto p-4'>
        <ReadDiaryById />
    </div>
    </div>
  )
}
