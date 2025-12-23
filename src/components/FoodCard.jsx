const FoodCard = ({ data }) => {
  const { name, cuisine, rating,  deliveryTime, image, price} = data;

  return (
    <div className="cards">
      <img src={image} alt={name} />
      <div className="card-text">
        <h3>{cuisine} </h3>
        <h5>{name} / {price}</h5>
        <p>⭐ {rating}</p>
        <p>⏱ { deliveryTime}</p>
      </div>
    </div>
  );
};

export default FoodCard;
