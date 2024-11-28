import { MENU_ITEM_URL } from "../utils/constants";
export const MenuCard = (props) => {
    const {menuData} = props;

    return(
        
            <div className="menu-card">
                <div className="info-box">
                    <h2>{menuData.name}</h2>
                    <h4>₹{Math.round(menuData.defaultPrice/100 || menuData.price/100)}</h4>
                    <p>{menuData.description}</p>
                </div>
                <div className="image-box">
                    <img className="menu-image" src={MENU_ITEM_URL+menuData.imageId} />
                </div>
            </div>
    )
}