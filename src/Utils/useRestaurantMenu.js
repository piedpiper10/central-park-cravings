import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurentDetails, setRestaurentDetails] = useState(null);
  const [cardsDetails, setCardsDetails] = useState(null);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
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
                REGULAR: { cards },
              },
            },
          },
        ],
      },
    } = ({} = json);
    setRestaurentDetails([
      name,
      costForTwoMessage,
      cuisines,
      avgRating,
      cloudinaryImageId,
    ]);
    setCardsDetails(cards);
  };
  console.log("from custom hook", restaurentDetails, cardsDetails);
  return [restaurentDetails, cardsDetails];
};

export default useRestaurantMenu;
