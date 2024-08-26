import { useState } from 'react'
import SigninForm from './components/signin'
import Title from './components/title'

function App() {
  return (
    <>
    <div className="flex flex-col">
    <Title/>
    <SigninForm />
    </div>
    </>
  )
}

export default App
