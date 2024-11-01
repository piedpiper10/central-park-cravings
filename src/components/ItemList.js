import { CDN_URL } from "../Utils/constants.js";
import { addItem } from "../Utils/cartSlice.js";
import { useDispatch } from "react-redux";
useDispatch;

const ItemList = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    console.log("check the event", e);
    dispatch(addItem(e));
  };
  return (
    <div>
      {props.items?.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="py-2 w-9/12">
              {console.log("yo yo", item?.card?.info?.name)}
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>₹{item?.card?.info?.price / 100}</span>
                <span>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
              </div>
              <span className="text-xs">{item?.card?.info?.description}</span>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 max-4 rounded-lg bg-black text-white shadow-lg cursor-pointer "
                  onClick={() => clickHandler(item)}
                >
                  ADD
                </button>
              </div>
              <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
