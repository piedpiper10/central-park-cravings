import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestaurentMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [restaurentDetails, setRestaurentDetails] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("check json", json);
    const {
      data: {
        cards: [
          ,
          ,
          {
            card: {
              card: {
                info: {
                  name,
                  costForTwoMessage,
                  cuisines = [],
                  avgRating,
                  cloudinaryImageId,
                },
              },
            },
          },
          ,
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [, , { card }, { card: card3 }],
                },
              },
            },
          },
        ],
      },
    } = ({} = json);
    setRestInfo(card);
    console.log("check this", card3);
    setRestaurentDetails([
      name,
      costForTwoMessage,
      cuisines,
      avgRating,
      cloudinaryImageId,
    ]);
  };
  if (restInfo === null || !restaurentDetails.length) {
    return <Shimmer />;
  }
  const [name, costForTwoMessage, cuisines, avgRating, cloudinaryImageId] =
    restaurentDetails;
  const {
    card: { itemCards, title },
  } = ({} = restInfo);
  console.log("check of the cards of", itemCards);

  return (
    <div className="menu restaurent">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      <ul className="menu-border">
        <h2>{title}</h2>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <div className={`rest-menu  ${itemCards.length > 1 && "border"}`}>
              <div>
                <div className="font-styles">{item?.card?.info?.name}</div>
                <p>
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </p>
                <p>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}(
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </p>
              </div>

              {item?.card?.info?.imageId && (
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    item?.card?.info?.imageId
                  }
                  className="img"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
