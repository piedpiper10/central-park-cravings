import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentMenu = (props) => {
  console.log("check menu info", props.restInfo);
  const {
    card: {
      card: { itemCards, title },
    },
  } = ({} = props.restInfo);
  const { showIndex } = props;
  console.log("check for the rest info", props.restInfo);

  const handleClick = (e) => {
    console.log("check for the clieck", e);
    props.setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handleClick(title)}
        >
          <span className="font-bold text-lg">
            {title}({itemCards?.length})
          </span>
          <span>^</span>
        </div>
        {console.log("this", showIndex)}
        {showIndex && <ItemList items={itemCards} />}
      </div>
    </div>
    // {/* {itemCards?.map((item, index) => {
    //   const {
    //     price,
    //     defaultPrice,
    //     imageId,
    //     name,
    //     ratings: {
    //       aggregatedRating: { rating, ratingCountV2 },
    //     },
    //   } = item?.card?.info;
    //   return (
    //     <li key={item?.card?.info?.id}>
    //       <div
    //         className={`py-4 flex justify-between items-center ${
    //           itemCards.length > 1 &&
    //           index < itemCards.length - 1 &&
    //           "border-b-4"
    //         }`}
    //       >
    //         <div>
    //           <div className="font-[Gilroy] font-bold text-xl">{name}</div>
    //           <p>{(price || defaultPrice) / 100}</p>
    //           <p>
    //             {rating}({ratingCountV2})
    //           </p>
    //         </div>

    //         {imageId && (
    //           <img
    //             src={
    //               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
    //               imageId
    //             }
    //             className="rounded-lg"
    //           />
    //         )}
    //       </div>
    //     </li>
    //   );
    // })} */}
  );
};

export default RestaurentMenu;
