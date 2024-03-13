import {Logo_url} from '../utilis/Constant'
const RestraCard = (props) => {
     
    const { list } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    sla,
    } = list;
    return (
      <div className="card m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="res-logo rounded-lg"
          src={
            Logo_url+
            cloudinaryImageId
          }
        />
        <h3 className='font-bold py-4'>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    );
  };
  
  //Higher Order component
  export const promotedValue = (RestraCard) =>{
    return() => {
      return(
        <div>
        <label>Promoted</label>
        </div>
      )
    }
  }

export default RestraCard;




