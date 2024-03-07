import React from "react";
// import { useEffect, useState } from "react";
import Shimmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestraduntMenu from '../utilis/useRestraduntMenu'
const RestraduntList = () => {
//   const [list, setList] = useState(null);
  const { resID } = useParams();
  const list  = useRestraduntMenu(resID)
//   const fetchRestoList = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=" +
//         resID +
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     setList(json);
//   };
//   useEffect(() => {
//     fetchRestoList();
//   }, []);

  if (list === null) return <Shimmer />;

  const { name, cuisines, areaName ,city} = list?.data?.cards[0]?.card?.card?.info; 
  const {
    itemCards  } = list?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className="menu-list">
      <h1>Menu List</h1>
      <h2>{name}</h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{areaName}</h2>
      <h2>{city}</h2>
      <h1>List of food item</h1>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li>
              {item?.card?.info?.name} -- {"Rs"}{item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestraduntList;
