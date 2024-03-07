const Shimmer = () => {
  return (
    <div className="simmer">
       {Array(10)
        .fill('')
        .map((e, index) => {
         return <div key={index} className="cardSimmer"></div>;
        })}
     </div>
  )

};
export default Shimmer;
