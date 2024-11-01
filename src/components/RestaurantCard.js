import { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../Utils/userContext";

const RestaurantCard = (props) => {
  const { restData } = props;
  console.log(restData);
  const { loggedInUser } = useContext(UserContext);
  const {
    name = "sample",
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
    id,
  } = restData?.info;

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="meghana foods image"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order Component

//input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
