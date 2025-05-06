import React from 'react'
import styles from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux'


const Card = ({item}) => {



    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket.basket)
  
    
    const addToBasket = (object) => {
      
      dispatch(getBasketThunk())
  
      if (basket) {
        const existingItem = basket.find((item) => item.name === object.name)
  
          if (!existingItem) {
            const data = {
              name: object.name,
              price: object.price,
              author: object.author,
              image: object.image,
              count: "1"
            };
            dispatch(postBasketThunk(data))
          } else {
            const data = {
              name: object.name,
              price: object.price,
              author: object.author,
              image: object.image,
              count: String(Number(existingItem.count) + 1)
            };
            console.log(data);
            dispatch(deleteBasketThunk(existingItem._id))
            dispatch(postBasketThunk(data))
            console.log("exist");
            
          }
      }
      const deleteItem = (btn, id) => {
        if (btn === "basket") {
          dispatch(deleteBasketThunk(id))
        }
      }
}
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.details}>
            <h5>{item.name}</h5>
            <h3>${item.price}</h3>
            <button onClick={() => {addToBasket(item)}}>Add to Basket</button>
        </div>
    </div>
  )
}

export default Card
