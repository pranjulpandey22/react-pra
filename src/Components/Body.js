import RestraCard from "./RestraCard";
// import { restaurantList } from "../utilis/MockData";//for mock data
import { useState, useEffect } from "react";
import Shimmer from "./Simmer";
import {Link} from 'react-router-dom';
// import useRestraduntCard from '../utilis/useRestraduntCard'
import useStatus from '../utilis/useStatus'

const Body = () => {
  const [listofRestro, setlistofRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [higestRanking, setHighestRanking] = useState(false);
  const onlineStatus = useStatus()
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  if(onlineStatus === false){
    return(
      <h1>You are offine please check your internet  connection</h1>
    )
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  
  const handleSearch = () => {
    const filterSearch = listofRestro.filter((search) => {
      return search?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilterList(filterSearch);
  };

  const handleHighestRanking = () => {
    if (higestRanking) {
      setFilterList(listofRestro);
    } else {
      const highestranking = listofRestro.filter((list) => {
        return list.info.avgRating <4.3;
      });
      setFilterList(highestranking);
    }
    setHighestRanking(!higestRanking);
  };
  //Conditonal rendering is in case of condition rendering
  return listofRestro?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-Text m-4 p-4">
          <input className=' focus:ring-2 border rounded-md border-black' type="text" value={searchText} onChange={handleChange} />
          <button className='rounded-full px-6 py-2 bg-pink-100 m-2'onClick={handleSearch}>Search</button>
        </div>
        <div className="search-Text flex items-center ">
        <button onClick={handleHighestRanking} className ='border rounded-full bg-pink-100 p-2'>
         {higestRanking ? 'Orignal List': 'Highest Ranking'} 
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filterList.map((restro) => {
          return <Link 
          key={restro?.info?.id}
          to ={'/restradunt/'+restro?.info?.id}> <RestraCard list={restro?.info} /></Link>;
        })}
      </div>
    </div>
  );
};
export default Body;
