import React from 'react'
import styles from './Footer.module.scss'
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
        
            <p>Copyright ©2025 All rights reserved | This template is made with <FaRegHeart color='red'/> by <a href="https://colorlib.com/">Colorlib</a></p>
        
    </div>
  )
}

export default Footer
