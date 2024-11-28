import { useState,useEffect } from "react";
import { ResCard } from "./ResCard.jsx";
import { Shimmer } from "./shimmer.jsx";
import { Link } from "react-router-dom";
import { MAIN_RESTAURANTS_API } from "../utils/constants.js";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const BodyComponent = () => {
   
  let [listOfRestaurant, setList] =  useState([]);
  let [filteredRestaurant , setFilteredRestaurant] = useState([]);

  useEffect(()=>{
      fetchData();
  },[])

  const fetchData = async()=>{
      const data = await fetch(MAIN_RESTAURANTS_API);

      const response = await data.json();

      const restaurants = response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const restaurantInfo = restaurants.map(restaurant => restaurant.info);
      setList(restaurantInfo);
      setFilteredRestaurant(restaurantInfo);
  }

  let [searchText , setSearchText] = useState("");

  const status = useOnlineStatus();

  if(status===false) return (
    <div>
      <h1>Looks Like You are Not Connected to the Internet, Please Check your connection!</h1>
    </div>
  )
  
  

    return listOfRestaurant.length === 0 ?( <Shimmer></Shimmer> ):(
      <div className="body-container">
        <div className="search">
          <input type="text" className="search-input" id="s-input" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>
          <button className="btn" onClick={()=>{
            const searcResult = listOfRestaurant.filter((res)=> res.name.includes(searchText));
           setFilteredRestaurant(searcResult);
          }}>Search</button>
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
             const filteredList = listOfRestaurant.filter((res) => res.avgRating>4.5);
              setFilteredRestaurant(filteredList)
            }}>Filter Top Rated </button>

            <button className="veg-btn" onClick={()=>{
              const vegItems = listOfRestaurant.filter((res)=>res.veg)
              setFilteredRestaurant(vegItems)
            }}>Veg</button>

            <button className="delivery-btn" onClick={()=>{
                const quickItems = listOfRestaurant.filter((res)=>res?.sla?.deliveryTime <=30);
              setFilteredRestaurant(quickItems)
            }}>Near me</button>

        </div>


        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/"+restaurant.id} className="res-text">
              <ResCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  