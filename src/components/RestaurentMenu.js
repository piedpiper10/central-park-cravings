const RestaurentMenu = (props) => {
  console.log("check menu info", props.restInfo);
  const {
    card: {
      card: { itemCards, title },
    },
  } = ({} = props.restInfo);

  return (
    <ul className="menu-border">
      <h2>{title}</h2>
      {itemCards?.map((item, index) => {
        const {
          price,
          defaultPrice,
          imageId,
          name,
          ratings: {
            aggregatedRating: { rating, ratingCountV2 },
          },
        } = item?.card?.info;
        return (
          <li key={item?.card?.info?.id}>
            <div
              className={`rest-menu  ${
                itemCards.length > 1 && index < itemCards.length - 1 && "border"
              }`}
            >
              <div>
                <div className="font-styles">{name}</div>
                <p>{(price || defaultPrice) / 100}</p>
                <p>
                  {rating}({ratingCountV2})
                </p>
              </div>

              {imageId && (
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    imageId
                  }
                  className="img"
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurentMenu;
