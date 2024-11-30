import { MenuCard } from "./MenuCard.jsx";
import { MenuInfo } from "./MenuInfo.jsx";
import { ShimmerMenu } from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.jsx";
import menu from "../utils/img/menu.png"



export const Menu = ()=>{

    const {resId} = useParams();

    const {resinfo,menuList}  = useRestaurantMenu(resId);//my custom hook in utils

  
    return menuList.length === 0 || resinfo.length === 0 ?
     (
         <div className="grid gap-4 m-5 place-items-center" >
            <ShimmerMenu></ShimmerMenu>
        </div>
        ) 
        : (
        <div className="grid gap-4 m-5 place-items-center">
            <MenuInfo info={resinfo} key={resinfo.id}></MenuInfo>
            <div className=" w-full flex items-center justify-center text-2xl bg-gray-50 rounded-full">
               
                <img src={menu} alt="" className="w-16 mx-3"/>
            
            </div>
            {menuList.map((menu)=>(
                <MenuCard menuData={menu} key = {menu.id} ></MenuCard>
            ))}
        </div>
    )
}