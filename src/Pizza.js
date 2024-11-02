const Pizza = ({ pizzas }) => {
  // if (pizzas.soldOut) return null;
  return (
    <div className="menuItem col-12 col-sm-12 col-md-6" key={pizzas.id}>
      <div className={`row car ${pizzas.soldOut ? "sold" : null}`}>
        <div className="photo col-6">
          <img src={pizzas.photoName} alt="" className="img-fluid" />
        </div>
        <div className="col-6 text">
          <h3 className="text-warning">{pizzas.name}</h3>
          <p>{pizzas.desc}</p>
          <h4>
            <b>{pizzas.soldOut ? "Sold Out" : pizzas.price}</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
