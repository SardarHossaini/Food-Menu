const Pizza = (props) => {
  if (props.pizzas.soldOut) return null;
  return (
    <div className="menuItem col-12 col-sm-12 col-md-6" key={props.pizzas.id}>
      <div className="row car">
        <div className="photo col-6">
          <img src={props.pizzas.photoName} alt="" className="img-fluid" />
        </div>
        <div className="col-6 text">
          <h3 className="text-warning">{props.pizzas.name}</h3>
          <p>{props.pizzas.desc}</p>
          <h4>
            <b>{props.pizzas.price}</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
