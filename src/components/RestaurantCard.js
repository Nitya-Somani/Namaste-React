import { IMG_URL } from "../utils/commonLinks";

const RestaurantCard = (resData) =>
{ 
  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,areaName,locality} = resData?.resData.info;
  const {deliveryTime,serviceability} = resData?.resData.info.sla;

  return (
  <div className ="cards-container">
    <div className = "card">
      <div className = "card-media">
      <img src={IMG_URL+cloudinaryImageId} alt="res-card-img" />  
        <div className = "delivery-time">{deliveryTime}</div>
        <div className = "bookmark"></div>
      </div>
      <div className = "card-description">
        <div className = "about-place">
          <div className = "place">
            <p className = "place-name">{name}</p>
            <p className = "place-speciality">{cuisines.join(", ")}</p>
          </div>
          <div className = "place-review">
            <p className = "rating">{avgRating}  &#x2605;</p>
            <p className = "per-person">  {costForTwo}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default RestaurantCard;