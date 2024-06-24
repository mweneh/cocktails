import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
   title:"110 in the shade",
   img:"/shade.jpg",
   price:"$10.5",
   desc:"A James Bond favorite, the Dry Martini is simple and elegant. Made with dry gin, dry vermouth, and orange bitters is best served with a lemon twist."
  },
  {
    img: "/magarita.jpg",
    title: "Magarita",
    desc: "Whether you like it with or without a salt rim, frozen or on the rocks, or with triple sec, Cointreau, or Grand Marnier, you can't go wrong with a classic Margarita. The tequila is key.",
    price: "$9.50",
  },
  {
    img: "/island.jpg",
    title: "3-Mile Long Island Iced Tea",
    desc: "Straight from the bars of Long Island. It has four different spirits — vodka, rum, gin, and tequila — mixed with triple sec, lemon juice, and cola.",
    price: "$12.50",
  },
  {
    img: "/screwed.jpg",
    title: "Absolutely Screwed Up",
    desc: "It features three kinds of rum, lime juice, falernum, grenadine, simple syrup, and pineapple juice. But be warned, after too many of these, you could be walking around like a zombie.",
    price: "$9.50",
  },
  {
    img: "/alice.jpg",
    title: "Alice in Wonderland",
    desc: "A mixture of rum, Campari, pineapple juice, lime juice, and demerara syrup.",
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
          The playbook?
          <br />
          Let us play
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent rounded-md text-white p-1">
          <a href="/alcoholic" className="hover:text-black">Alcoholic </a>
        </li>
        <li>
          <a href="/non-alcoholic" className="hover:text-accent">Non-Alcoholic </a>
        </li>
        <li>
          <a href="/bottled" className="hover:text-accent">Bottled Drinks </a>
        </li>
        <li>
          <a href="/beverages" className="hover:text-accent"> Beverages</a>
        </li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto rounded-2xl"
            src="/menu_1.jpg"
            width={500}
            height={600}
            alt="drink"
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