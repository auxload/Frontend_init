import { ReactNode } from 'react'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-screen w-full container'>
    {children}
    </div>
  )
}

export default MainLayout