import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURENT_LIST_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListofRestraunts] = useState([]);
  const [fileterdRestaurants, setFileterdRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURENT_LIST_URL);
      const json = await data.json();
      const restaurantsData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFileterdRestaurants(restaurantsData);
      setListofRestraunts(restaurantsData);
    } catch (err) {
      console.log("check for the error", err);
    }
  };

  //Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              if (!e?.target?.value) {
                setFileterdRestaurants(listOfRestaurants);
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //fileter the restaurent and update
              setFileterdRestaurants(
                listOfRestaurants?.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={(event) => {
            const fileteredLList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFileterdRestaurants(fileteredLList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {fileterdRestaurants.map((restaurant) => (
          <Link
            to={`/restaurents/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
