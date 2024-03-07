import { useState, useEffect } from "react";
const useRestraduntCard = () =>{
    const [listofRestro, setlistofRestro] = useState([]);
    const [filterList, setFilterList] = useState([]);
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
    
      useEffect(() => {
        fetchData();
      }, []);
    
    return (
        listofRestro,
        setlistofRestro,
        filterList,
        setFilterList
    )
}
export default useRestraduntCard