import AccordianItem from "./AccordianItem";
import { useState } from "react";
const Accordian = ({ categoreis,showItems,setshowIndex }) => {
//   const [state, setstate] = useState(false);
  const handleClick = () => {
    // setstate(!state);
    setshowIndex()
  };
  console.log(categoreis);
  return (
    <div className="Accordian">
      <div className="childAccordina" onClick={handleClick}>
        <span>
          {categoreis.title} ({categoreis.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {categoreis.itemCards.map((item) => {
        return (
          <div key= {item?.card?.info?.id}>
            {showItems && <AccordianItem items={item?.card?.info} />}
          </div>
        );
      })}
    </div>
  );
};
export default Accordian;
