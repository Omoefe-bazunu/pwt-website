
import { FooterSection } from "./Homepage/Footer"
import { NavBar } from "./Homepage/NavBar"
import {Outlet} from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <div className="App bg-purple-700 h-screen flex flex-col w-full jusify-center items-center overflow-x-hidden">
        <NavBar />
        <Outlet />
        <FooterSection />
    </div>
  )
}
