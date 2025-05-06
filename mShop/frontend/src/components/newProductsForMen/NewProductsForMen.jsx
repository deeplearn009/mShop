import React from 'react'
import styles from './Styles.module.scss'

const NewProductsForMen = () => {
  return (
    <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.title}>
            <h1>New realeased Products for Men</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
                </div>
                <div className={styles.details}>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
                </div>
                <div className={styles.details}>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
                </div>
                <div className={styles.details}>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
                </div>
                <div className={styles.details}>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewProductsForMen
