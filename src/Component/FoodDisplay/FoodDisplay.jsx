// import React from 'react'
import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../StoreContext/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)
    return (
        <div className="food-display" id="food-display">
            <h2>Top dish near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem
                            key={index}
                            id={item.id}
                            Name={item.Name}
                            description={item.description}
                            Price={item.Price}
                            Photo={item.Photo}
                        />
                    }
                })}
            </div>

        </div>
    )
}

export default FoodDisplay
