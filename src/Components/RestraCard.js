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
      <div className="card">
        <img
          className="res-logo"
          src={
            Logo_url+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{sla?.slaString}</h3>
      </div>
    );
  };
export default RestraCard;