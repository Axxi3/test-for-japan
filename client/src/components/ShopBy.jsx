import React from "react";
import HorSlider from "./HorSlider";

const ShopBy = ({ title }) => {
  const products = [
    {
      _id: "1",
      img: "/GenInfo/adidas.jpg",
      title: "Adidas Originals",
      brand: "Adidas",
      category: "men",
      sellPrice: 4999,
      mrp: "5899",
      discount: 15,
      rating: 4.3,
    },
    {
      _id: "2",
      img: "/GenInfo/nike.png",
      title: "Nike Air Max",
      brand: "Nike",
      category: "men",
      sellPrice: 6499,
      mrp: "7199",
      discount: 10,
      rating: 4.6,
    },
    {
      _id: "3",
      img: "/GenInfo/skechers.jpg",
      title: "Skechers Run",
      brand: "Skechers",
      category: "men",
      sellPrice: 3299,
      mrp: "3999",
      discount: 20,
      rating: 4.1,
    },
    {
      _id: "4",
      img: "/GenInfo/puma.jpg",
      title: "Puma Motorsport",
      brand: "Puma",
      category: "unisex",
      sellPrice: 2899,
      mrp: "3799",
      discount: 25,
      rating: 4.0,
    },
  ];

  return (
    <>
      <div className="mt-10 mb-2 text-2xl">{title}</div>

      <div className="flex w-full space-x-4 overflow-x-auto">
        {products.map((item) => (
          <HorSlider
            key={item._id}
            product={item}
            home={true}
          />
        ))}
      </div>
    </>
  );
};

export default ShopBy;
