import { CDN_URL } from "../utils/constants"
export const MenuInfo = (props) =>{
    const {info} = props
    return(
        <div className="main">
                <div>
                    <h2>{info.name}</h2>
                    <p>{info.cuisines.join(",")}</p>
                    <p>{info.avgRating}</p>
                    <p>{info.areaName}</p>
                    <p>{info.costForTwoMessage}</p>
                    <p>{info?.sla?.minDeliveryTime}-{info?.sla?.maxDeliveryTime}mins</p>
                </div>
                <div className="image-box">
                    <img className="menu-image" src={CDN_URL+info.cloudinaryImageId} alt="" />
                </div>
            </div>
    )
}