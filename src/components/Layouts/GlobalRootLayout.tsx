import { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'

const GlobalRootLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default GlobalRootLayout