import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurentMenu from "./RestaurentMenu";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurentMenuCategories = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const [restaurentDetails, cardsDetails] = useRestaurantMenu(resId);
  console.log("from  component", restaurentDetails, cardsDetails);
  if (cardsDetails === null || restaurentDetails === null) {
    return <Shimmer />;
  }
  const [name, costForTwoMessage, cuisines, avgRating] = restaurentDetails;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h3 className="pb-4">{avgRating}</h3>
      {cardsDetails?.slice(2, cardsDetails?.length - 2)?.map((menu, index) => (
        <RestaurentMenu
          restInfo={menu}
          key={menu?.card?.card?.title}
          setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
          showIndex={index === showIndex ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurentMenuCategories;
