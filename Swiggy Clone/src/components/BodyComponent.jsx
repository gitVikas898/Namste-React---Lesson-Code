import  resList  from "../utils/MockData.js";
import { ResCard } from "./ResCard.jsx";

import { useEffect, useState } from "react";


export const BodyComponent = () => {
   
  let [listOfRestaurant, setList] =  useState(resList);

  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = async()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.798113&lng=86.25776049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const response = await data.json();
   const restaurants = response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   const restaurantInfo = restaurants.map(restaurant => restaurant.info);
    
   setList(restaurantInfo)
  }

    return (
      <div className="body-container">
        <div className="search">
          <input type="text" className="search-input" id="s-input"></input>
          <button className="btn" onClick={()=>{
            const find = document.getElementById("s-input").value;
            console.log(find)
            const searcResult = listOfRestaurant.filter((res)=> res.cuisines.includes(find));
            setList(searcResult);
          }}>Search</button>
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
             const filteredList = listOfRestaurant.filter((res) => res.avgRating>4);
              setList(filteredList);
            }}>Filter Top Rated </button>

            <button className="veg-btn" onClick={()=>{
              const vegItems = listOfRestaurant.filter((res)=>res.veg)
              setList(vegItems);
            }}>Veg</button>

            <button className="delivery-btn" onClick={()=>{
                const quickItems = listOfRestaurant.filter((res)=>res.deliveryTime<20);
                setList(quickItems);
            }}>Near me</button>

            <button className="less" onClick={()=>{
              const less200 = listOfRestaurant.filter((res)=>res.cost<=200)
              setList(less200);
            }}>
              Less than ₹200
            </button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <ResCard resData={restaurant} key={restaurant.id} />
          ))}
        </div>
      </div>
    );
  };
  