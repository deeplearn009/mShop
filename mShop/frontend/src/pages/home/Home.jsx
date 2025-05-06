import React from 'react'
import styles from './Home.module.scss'
import Welcome from '../../components/welcomeBanner/Welcome'
import Categories from '../../components/categories/Categories'
import NewProductsForMen from '../../components/newProductsForMen/NewProductsForMen'
import NewProductsForWomen from '../../components/newProductsForWomen/NewProductsForWomen'
import RelatedProducts from '../../components/relatedProducts/RelatedProducts'



const Home = () => {
  return (
    <div className={styles.container}>
      <Welcome/>
      <Categories/>
      <NewProductsForMen/>
      <NewProductsForWomen/>
      <RelatedProducts/>
    </div>
  )
}

export default Home
