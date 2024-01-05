import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Todo from '../components/todo/todo'

export default function Todolist() {
  return (
    <>
    <Navbar />
    <div className='max-w-screen-xl mx-auto p-4'>
      <Todo />
    </div>
    </>
  )
}
