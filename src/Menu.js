const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 10,
      photoName: "image/f1.jpg",
      soldOut: true,
    },
    {
      id: 2,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 13,
      photoName: "image/f2.jpg",
      soldOut: false,
    },
    {
      id: 3,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 10,
      photoName: "image/f3.jpg",
      soldOut: false,
    },
    {
      id: 4,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 13,
      photoName: "image/f4.jpg",
      soldOut: false,
    },
    {
      id: 1,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 10,
      photoName: "image/f5.jpg",
      soldOut: false,
    },
    {
      id: 2,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 13,
      photoName: "image/f6.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="container ">
      <div className="row">
        {menuData.map((item) => (
          <div className="menuItem col-12 col-sm-12 col-md-6" key={item.id}>
            <div className="row car">
              <div className="photo col-6">
                <img src={item.photoName} alt="" className="img-fluid" />
              </div>
              <div className="col-6 text">
                <h3 className="text-warning">{item.name}</h3>
                <p>{item.desc}</p>
                <h4>
                  <b>{item.price}</b>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
