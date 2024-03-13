import { Logo_url } from "../utilis/Constant";
import { useDispatch } from "react-redux";
import { addItem ,removeSingleItem } from "../utilis/CartSlice";
const AccordianItem = ({ items, isCart }) => {
  console.log(items, "items");
  const dispatch = useDispatch();

  const handkleClick = (item) => {
    if (isCart) {
      dispatch(removeSingleItem(item.id)); // dispatch removeItem action if isInCart is true
    } else {
      dispatch(addItem(item)); // dispatch addItem action if isInCart is false
    }
  };
  return (
    <div className="ItemList">
      <div className=" item py-2">
        <span>{items.name}</span>--
        <span>₹ {items.price / 100 || items.defaultPrice / 100}</span>
        <div>
          <img className="imageItems" src={Logo_url + items?.imageId} />
          <button className="" onClick={() => handkleClick(items)}>
            {isCart ? 'Del': 'Add +'}
          </button>
        </div>
      </div>
      <p className="text-xs">{items.description}</p>
    </div>
  );
};
export default AccordianItem;
