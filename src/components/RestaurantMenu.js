import Shimmer from "./Shimmer";
import { DISH_URL, MENU_API } from "../utils/commonLinks";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  console.log(resData);
  const {
    name,
    cuisines,
    id,
    city,
    costForTwoMessage,
    cloudinaryImageId,
    avgRatingString,
    locality,
  } = resData.cards[0]?.card?.card?.info;
  const { itemCards } =
    resData.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  console.log(
    resData.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0]?.card?.info?.name
  );
  //this console.log prints the name of the dish
  return (
    <section id="our_menu" className="pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page_title text-center mb-1">
              <h1>{name}</h1>
              <span>{cuisines.join(", ")}</span>
              <p>
                {locality},{city}
              </p>
              <div className="place-review">
                <p className="rating">{avgRatingString} ★</p>
                <p className="per-person"> {costForTwoMessage}</p>
              </div>
              <div className="single_line"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="tab-content col-lg-12" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="breakfast"
              role="tabpanel"
              aria-labelledby="breakfast-tab"
            >
              <div className="row">
                <div className="col-12">
                  <div>
                    <div className="menu_content">
                      {itemCards.map((item) => (
                        <span key={item.card.info.id}>
                          <div>
                            {item.card.info.imageId && (
                              <img
                                src={DISH_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                              />
                            )}
                          </div>
                          <h4>
                            <span>{item.card.info.name} </span> -{" "}
                            <span> Rs.{item.card.info.price / 100}</span>
                          </h4>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
