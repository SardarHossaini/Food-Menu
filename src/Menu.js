import Pizza from "./Pizza";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Donat",
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
      id: 5,
      name: "Focaccia",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 10,
      photoName: "image/f5.jpg",
      soldOut: false,
    },
    {
      id: 6,
      name: "Pizza",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident at vel quia culpa vitae officia ratione, dolore error ad neque perspiciatis?",
      price: 13,
      photoName: "image/f6.jpg",
      soldOut: true,
    },
  ];
  if (menuData.id == 6) return null;
  return (
    <div className="container ">
      <div className="row">
        {menuData.map((pizzas) => (
          <Pizza pizzas={pizzas} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
