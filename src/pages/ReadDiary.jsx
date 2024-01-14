import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ReadDiaryById from '../components/readDiary/ReadDiaryById'

export default function ReadDiary() {
  return (
    <>
    <Navbar />
    <div className='max-w-screen-xl mx-auto p-4'>
        <ReadDiaryById />
    </div>
    </>
  )
}
