import { Rest_Data } from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListofRestraunts] = useState(Rest_Data);
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
