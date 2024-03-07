import { useEffect, useState } from "react";

const useRestraduntMenu = (resID) => {
  const [list, setList] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=" +
        resID +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setList(json);
    console.log(json,'sds')
  };

  useEffect(() => {
    fetchData();
  }, []);

  return list;
};
export default useRestraduntMenu;
