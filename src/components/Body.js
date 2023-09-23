import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurants);
      setOriginalData(restaurants);
      setFilteredResList(restaurants);
    } catch (error) {
      setFilteredResList([]);
    }
  };
  const handleSearch = () => {
    const listAfterSearch = originalData.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        restaurant.info.cuisines
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setFilteredResList(listAfterSearch);
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus == false) {
    return (
      <div className="body">
        <div className="offlineStatus">
          <b>Connection Error .</b>
          <br />
          <i>
            Looks like you are offline !!! Please check your internet connection
            .
          </i>
          <div>
            No internet
            <br />
            Try:
            <br />
            Checking the network cables, modem, and router
            <br />
            Reconnecting to Wi-Fi
            <br />
            Running Windows Network Diagnostics
            <br />
            ERR_INTERNET_DISCONNECTED
            <br />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="searching-bar">
        <div className="d-flex ms-auto nav-item search-form">
          <div className="search-wrapper">
            <input
              className="form-control me-2 p-1 ps-2"
              type="text"
              placeholder="Search for restaurant or cuisine "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const listAfterSearch = originalData.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );

                setFilteredResList(listAfterSearch);
              }}
            />
            <button className="search-button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="restaurantContainer">
        {filteredResList.length === 0 && searchText.length === 0 ? (
          <Shimmer />
        ) : filteredResList.length === 0 && searchText.length > 0 ? (
          <div className="no-results-message">
            No results found for '{searchText}'
          </div>
        ) : (
          filteredResList.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
