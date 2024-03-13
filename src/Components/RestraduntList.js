import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestraduntMenu from "../utilis/useRestraduntMenu";
import Accordian from "./Accordian";
const RestraduntList = () => {
  //   const [list, setList] = useState(null);
  const { resID } = useParams();
  const list = useRestraduntMenu(resID);
  const [showIndex, setshowIndex] = useState(null);
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

  const {
    name,
    cuisines,
    areaName,
    city,
    sla,
    avgRating,
    totalRatingsString,
  } = list?.data?.cards[0]?.card?.card?.info;
  const {
    itemCards,
  } = list?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categoreies = list?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (d) => {
      return (
        d?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    }
  );
  // console.log(categoreies, "categoreies");
  return (
    <>
      <div className="menu-list my-6 text-2xl flex justify-around rounded-b-md border-dotted border-b-2 border-blue-900">
        <div>
          <h2 className="font-bold ">{name}</h2>
          <h2 className="font-thin  text-sm">{cuisines.join(",")}</h2>
          <h6 className="text-xs font-thin">
            {areaName} ,{sla?.lastMileTravelString}
          </h6>
        </div>
        <div className="">
          <h3 className="border-b-4 border-blue-900">{avgRating}</h3>
          <h3>{totalRatingsString}</h3>
        </div>
      </div>
      <h1 className="text-center font-bold">List of food item</h1>
      {categoreies.map((cat, index) => {
        return (
          <div key={cat?.card?.card?.title}>
            {/* controlled Component */}
            <Accordian
              categoreis={cat?.card?.card}
              showItems={index === showIndex ? true : false}
              // setshowIndex={()=>setshowIndex(index)}
              setshowIndex={()=>{
                if(showIndex==index){
                    setshowIndex(-1);
                }
                else{
                    setshowIndex(index);
                }
              }        
              }
            />
          </div>
        );
      })}
    </>
  );
};
export default RestraduntList;
