// import React from 'react'
import { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../StoreContext/StoreContext"
// import { assets } from "../../assets/assets"

const Cart = () => {

  const { cardItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cardItems[item.id] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item" key={index}>
                    <img src={item.Photo} alt="" />
                    <p>{item.Name}</p>
                    <p>${item.Price}</p>
                    <p>{cardItems[item.id]}</p>
                    <p>${item.Price * cardItems[item.id]}</p>
                    <p onClick={() => removeFromCart(item.id)} className="cross">x</p>
                  </div>
                  <hr />
                </>

              )
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>

            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart