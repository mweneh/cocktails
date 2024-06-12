import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
   title:"110 in the shade",
   img:"/shade.jpg",
   price:"$10.5",
   desc:"A James Bond favorite, the Dry Martini is simple and elegant. While we don't know the exact origin of the Dry Martini, we do know that the cocktail made with dry gin, dry vermouth, and orange bitters is best served with a lemon twist."
  },
  {
    img: "/magarita.jpg",
    title: "Magarita",
    desc: "The Margarita originated in Mexico, and it sparks a lot of debate about the way it's served. Whether you like it with or without a salt rim, frozen or on the rocks, or with triple sec, Cointreau, or Grand Marnier, you can't go wrong with a classic Margarita. The tequila is key, so opt for blanco tequila.",
    price: "$9.50",
  },
  {
    img: "/island.jpg",
    title: "3-Mile Long Island Iced Tea",
    desc: "Straight from the bars of Long Island, the Long Island Iced Tea was popularized in the 1970s. When looking at a Long Island Iced Tea recipe, this cocktail can seem daunting. It has four different spirits — vodka, rum, gin, and tequila — that don't seem to go together. But mix those with triple sec, lemon juice, and cola and you've got a cocktail that everyone from coast to coast loves.",
    price: "$12.50",
  },
  {
    img: "/screwed.jpg",
    title: "Absolutely Screwed Up",
    desc: "This master piece was created by Donn Beach, a legendary tiki bar owner, and has since become a favorite tiki cocktail. It features three kinds of rum, lime juice, falernum, grenadine, simple syrup, and pineapple juice. But be warned, after too many of these, you could be walking around like a zombie.",
    price: "$9.50",
  },
  {
    img: "/alice.jpg",
    title: "Alice in Wonderland",
    desc: "The Jungle Bird cocktail originated at the Kuala Lumpur Hilton Hotel in Malaysia in the 1970s. The cocktail was served in the Aviary Bar where tropical birds were on display, hence its name. A mixture of rum, Campari, pineapple juice, lime juice, and demerara syrup, the Jungle Bird was extremely popular in Malaysia for years, but it took decades before it made a splash in the U.S. Now the drink is a staple at The Joint.",
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