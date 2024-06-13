// import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../StoreContext/StoreContext'

const FoodItem = ({ id, Name, Photo, description, Price }) => {

  const { cardItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className='food-item-image' src={Photo} alt="" />
          {!cardItems[id]
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
            : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cardItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_green_icon} alt="" />
            </div>
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{Name}</p>
            <img src={assets.Rating} alt="" />
          </div>
          <div className="food-item-desc">{description}</div>
          <div className='food-item-price'>₹{Price}</div>
        </div>
      </div>
    </>
  )
}

export default FoodItem
