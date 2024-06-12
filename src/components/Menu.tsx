import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
   title:"110 in the shade",
   img:"/shade.jpg",
   price:"$10.5",
   desc:"Description"
  },
  {
    img: "magarita.jpg",
    title: "Magarita",
    desc: "Tequila,Triple sec,Lime , Contemporary Classics, Alcoholic,Cocktail glass",
    price: "$9.50",
  },
  {
    img: "/island.jpg",
    title: "3-Mile Long Island Iced Tea",
    desc: "Alcoholic,Collins Glass, Tequila, Triple sec, light rum, vodka, lemon, sweet sour gin, cola",
    price: "$12.50",
  },
  {
    img: "/screwed.jpg",
    title: "Absolutly Screwed Up",
    desc: "Ginger ale, Orange juice,Absolut Citron, triple sec",
    price: "$9.50",
  },
  {
    img: "/alice.jpg",
    title: "Alice in Wonderland",
    desc: "Amaretto, Southern comfort,  Grand marnier",
    price: "$13.50",
  },
 
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Alcoholic</li>
        <li>Non-Alcoholic</li>
        <li>Bottled Drinks</li>
        <li>Beverages</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;