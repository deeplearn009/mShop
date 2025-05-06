import React from 'react'
import styles from './Styles.module.scss'

const Welcome = () => {
  return (
    <div className={styles.container}>
        
            <div className={styles.left}>
                <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
            </div>
            <div className={styles.right}>
                <h1><span>Flat</span> 75% Off</h1>
                <h1 id={styles.big}>It’s Happening <br /> this Season!</h1>
                <button>Purchase Now</button>
            </div>
        
    </div>
  )
}

export default Welcome
