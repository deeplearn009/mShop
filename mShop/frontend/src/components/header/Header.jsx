import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div className={styles.container}>
        <header>

          <div className={styles.logo}>
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="Logo" />
          </div>

          <div className={styles.nav}>
            <nav>
              <Link to={'/'}>Home</Link>
              <a href="#">Category</a>
              <a href="#">Men</a>
              <a href="#">Woman</a>
              <a href="#">Latest</a>
              <a href="#">Pages</a>
              <Link to={'/basket'}>Basket</Link>
            </nav>
          </div>

          <div className={styles.burger}>
            <GiHamburgerMenu size={30} color='gray'/>
          </div>

        </header>
    </div>
  )
}

export default Header
