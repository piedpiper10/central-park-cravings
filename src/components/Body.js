import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURENT_LIST_URL } from "../Utils/constants";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListofRestraunts] = useState([]);

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURENT_LIST_URL);
      const res = await data.json();
      setListofRestraunts(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log("check for the error", err);
    }
  };

  console.log("body rendered");
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="fileter">
        <button
          className="filter-btn"
          onClick={(event) => {
            console.log("Button Clicked", event);
            const fileteredLList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestraunts(fileteredLList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
