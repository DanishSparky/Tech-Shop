import navbar from '../styling/navbar.module.css'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { RiAccountCircle2Line } from 'react-icons/ri'
import { IoCartOutline } from 'react-icons/io5'

const Nav_Bar = () => {
  return (
    <>
    <nav className={navbar.nav}>
      <Link to="/" className={navbar.link}><h2 className={navbar.heading}>Tech-Shop</h2></Link>

      <div className={navbar.nav_items}>
        <FaSearch />
        <Link to="/cart"><IoCartOutline /></Link>
        <RiAccountCircle2Line />
      </div>



    </nav> 
    </>
  )
}

export default Nav_Bar
