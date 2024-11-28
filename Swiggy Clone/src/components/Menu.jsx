import { MenuCard } from "./MenuCard.jsx";
import { MenuInfo } from "./MenuInfo.jsx";
import { ShimmerMenu } from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.jsx";



export const Menu = ()=>{

    const {resId} = useParams();

    const {resinfo,menuList}  = useRestaurantMenu(resId);//my custom hook in utils

  
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