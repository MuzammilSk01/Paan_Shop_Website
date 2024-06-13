// import React from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
// import FoodItem from '../../Component/FoodItem/FoodItem';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';
import About from '../../Component/About/About';
// import { food_list, menu_list } from '../../assets/assets';

const Home = () => {

    const [category, setCategory] = useState("All")

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
            <br />
            <About />
        </div>
    )
}

export default Home
