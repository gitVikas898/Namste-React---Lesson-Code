import { CDN_URL, RATING_URL } from "../utils/constants.js";
export const ResCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <div className="image-container">
          <img
            className="res-image"
            src={
              CDN_URL+resData.cloudinaryImageId
            }
          ></img>
        </div>
        <div className="name-container">
          <h3 className="name">{resData.name}</h3>
          <div className="info">
            <img
              src={RATING_URL}
              className="rating"
            ></img>
            <p className="rating-text">{resData.avgRating}</p>
            <p className="delivery">&#9679; {resData.sla.deliveryTime} mins</p>
          </div>
          <p>{resData.cuisines.join(",")}</p>
          <p>{resData.costForTwo} </p>
        </div>
      </div>
    );
  };