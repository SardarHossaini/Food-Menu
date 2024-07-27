const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Focaccia",
      desc: "Breat with italian olive oil rosemary",
      price: 10,
      photoName: "image/f1.jpg",
      soldOut: false,
    },
    {
      id: 2,
      name: "Focaccia",
      desc: "Breat with italian olive oil rosemary",
      price: 13,
      photoName: "image/f2.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="container ">
      <div className="row">
        {menuData.map((item) => (
          <div className="menuItem col-12 col-sm-6 col-md-6" key={item.id}>
            <div className="row">
              <div className="col-6">
                <img src={item.photoName} alt="" className="img-fluid" />
              </div>
              <div className="col-6">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
