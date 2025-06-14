function Restaurant(props) {

  return (
    <div className="restaurant">
        <img src={props.restaurant.image} alt={props.restaurant.name} />
        <h2>{props.restaurant.name}</h2>
        <ul>
          <li>{props.restaurant.address}</li>
          <li>{props.restaurant.phone}</li>
          <li>{props.restaurant.cuisine}</li>
          <li>Rating: {props.restaurant.rating}</li>
        </ul>
    </div>
  );
}

export default Restaurant;
