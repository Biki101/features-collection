"use client";
import FeatureTitile from "./components/feature-titile/FeatureTitile";
import Cards from "./components/cards/Cards";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);

  const images = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Mountain",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Trees",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Lake",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "River",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Animal",
    },
  ];

  return (
    <div className="w-[90vw] m-auto">
      <FeatureTitile title="Expanding Cards" />
      <div className="flex justify-center gap-2 card-items">
        {images?.map((items: any, index: any) => (
          <div key={index} onClick={() => setActive(index)}>
            <Cards
              image={items.imageUrl}
              title={items.title}
              active={active === index ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
