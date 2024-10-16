import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurentMenu from "./RestaurentMenu";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurentMenuCategories = () => {
  const { resId } = useParams();
  const [restaurentDetails, cardsDetails] = useRestaurantMenu(resId);
  console.log("from  component", restaurentDetails, cardsDetails);
  if (cardsDetails === null || restaurentDetails === null) {
    return <Shimmer />;
  }
  const [name, costForTwoMessage, cuisines, avgRating] = restaurentDetails;

  return (
    <div className="menu restaurent">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      {cardsDetails?.slice(2, cardsDetails?.length - 2)?.map((menu) => (
        <RestaurentMenu restInfo={menu} key={menu?.card?.card?.title} />
      ))}
    </div>
  );
};

export default RestaurentMenuCategories;
