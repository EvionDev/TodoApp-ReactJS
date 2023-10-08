import React from 'react'
import Button from './Button'
const navbar = () => {
  return (
    <div className="flex h-20 items-center justify-around border-b-2 border-black">
      <h1 className="font-mono text-xl font-semibold">TodoApp</h1>
      <div className='flex gap-6'>
        <Button name='Login' to='/login' />
        <Button name='Register' to='/register'/>
      </div>
  </div>
  )
}

export default navbar
