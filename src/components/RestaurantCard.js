import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  console.log("check for the props", props);
  const { restData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = restData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="meghana foods image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
