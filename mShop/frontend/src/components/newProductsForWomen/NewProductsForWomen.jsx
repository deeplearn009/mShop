import React, { useEffect } from 'react'
import styles from './Styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsThunk } from '../../redux/reducers/productSlice'
import Card from '../card/Card'
import axios from 'axios'

const NewProductsForWomen = () => {

    

    const dispatch = useDispatch()

    const data = useSelector((state) => state.cards.cards)

    useEffect(() => {
        dispatch(getCardsThunk())
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>New realeased Products for Women</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.cards}>
            {data?.map(item => <Card item={item}/>)}
        </div>
    </div>
  )
}

export default NewProductsForWomen
