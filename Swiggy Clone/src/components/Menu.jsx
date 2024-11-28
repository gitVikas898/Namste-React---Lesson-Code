import { useEffect, useState } from "react"
import { MenuCard } from "./MenuCard.jsx";
import { MenuInfo } from "./MenuInfo.jsx";
import { ShimmerMenu } from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";



export const Menu = ()=>{

    
  const [menuList,setMenuList] = useState([]);

  const [resinfo , setResInfo] = useState([]);

  const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API+resId);

        const response = await data.json();
        
        const menu = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

        const info = menu.map((res)=>res.card.info);
        setMenuList(info);

        const resInfoEx = response?.data?.cards[2]?.card?.card?.info;

        setResInfo(resInfoEx);

        console.log(info);
        console.log(resInfoEx);


    }
  
    return menuList.length === 0 || resinfo.length === 0 ? (<ShimmerMenu></ShimmerMenu>) : (
        <div className="menu-container">
            <MenuInfo info={resinfo} key={resinfo.id}></MenuInfo>
            <div className="menu-title">
                <h3>Menu</h3>
            </div>
            {menuList.map((menu)=>(
                <MenuCard menuData={menu} key = {menu.id} ></MenuCard>
            ))}
        </div>
    )
}