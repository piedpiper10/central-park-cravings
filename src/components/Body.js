import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURENT_LIST_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlieStatus from "../Utils/useOnlineStatus";

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

  const onlineStatus = useOnlieStatus();
  if (onlineStatus === false) {
    return (
      <h1> looks like your offline!! please check your internet connection </h1>
    );
  }

  //Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              if (!e?.target?.value) {
                setFileterdRestaurants(listOfRestaurants);
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
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
