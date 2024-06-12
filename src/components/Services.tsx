import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professional Mixology",
    desc: "Our expert mixologists craft unique and delicious cocktails tailored to your tastes.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Enjoy our exquisite cocktails delivered straight to your door.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Discover our curated selection of fine wines from around the world.",
  },
  {
    img: "/services__4.png",
    title: "Free WiFi",
    desc: "Stay connected while you enjoy our drinks. Our venue offers free WiFi for all customers.",
  },
];


const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose a <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
        A neighbourhood joint with good music, 
        <br/>
        affordable drinks and fantastic food that leaves you wanting more 
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;