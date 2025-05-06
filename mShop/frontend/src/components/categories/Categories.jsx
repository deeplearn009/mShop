import React from 'react'
import styles from './Styles.module.scss'

const Categories = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Shop for Different Categories</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.top}>
                        <div className={styles.img1}>
                            <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
                        </div>
                        <div className={styles.img2}>
                            <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
                        </div>
                </div>
                <div className={styles.bottom}>
                    <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Categories
