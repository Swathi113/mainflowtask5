import React from "react";
import "./App.css";

const devices = [
  {
    name: "iPhone 15 Pro",
    description: "The ultimate smartphone experience with A17 Bionic chip.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIIc4tjwTBo9j5aPYfEZqmtR4XBKjW8v8RQ&s",
    url: "https://en.wikipedia.org/wiki/IPhone_15_Prohttps://www.apple.com/iphone-15/",
  },
  {
    name: "MacBook Pro 16-inch",
    description: "Powerful performance with M3 Pro and stunning Liquid Retina XDR display.",
    image: "https://media.wired.com/photos/65e615535762bcc4de5539ce/master/w_1600%2Cc_limit/MacBook-Air-M3-13-Inch.jpg",
    url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwitzK_FyKuKAxVmo2YCHbLgKVYYABAAGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAmfq6BhAsEiwAX1jsZx9Umx8ZMY0GgT9Bk5z0ueVedXvHoPCgKfo_w-Bieb5tRmF4uoQ-QRoChc0QAvD_BwE&ohost=www.google.com&cid=CAESVeD2LWUZJYEP_M7fWlT2PZzOHcj0vh3zCkH2qPNLB65bLU3O-zKIy5uKjI-ydI_kwCHiDYHjNsEgF45OFOMgETfDYP7zpgkddgOVB2SY9Hk8g0nv-Vk&sig=AOD64_3e65v4GKRux0QaGAjgIKh47xR23g&q&adurl&ved=2ahUKEwiaoqrFyKuKAxXbTWwGHXUYLWkQ0Qx6BAgtEAEhttps://www.apple.com/macbook-air/",
 
  },
  {
    name: "Apple Watch Series 9",
    description: "Advanced health features and precision tracking for a healthier life.",
    image: "https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_9_LTE_45mm_Graphite_Stainless_Steel_Midnight_Sport_Band_PDP_Image_Position-1__en-IN_d9163a66-99b9-42a8-98b0-cf7d80afc134.jpg?v=1698866948://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-gold-stainless-steel-Sport-Band-purple-230912_inline.jpg.large.jpghttps://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-model-unselect-gallery-1-202309?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1694155795476",
    url: "https://www.imagineonline.store/collections/apple-watch-series-9?srsltid=AfmBOoqGJ3oz2CEV0mzQO0wZWrQWLjaD-V4QWoH8Ev7GwPG2ncDfW5BB",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Apple Device Store</h1>
      </header>
      <main className="main">
        {devices.map((device, index) => (
          <div className="device-card" key={index}>
            <img src={device.image} alt={device.name} className="device-image" />
            <a href={device.url} target="_blank" rel="noopener noreferrer">
              <h2>{device.name}</h2>
            </a>
            <p>{device.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>Welcome to the Apple Device Store, your one-stop destination for the latest and greatest Apple products.</p>
      <h2>History</h2>
      <p>Apple Inc. was founded in 1976 and has since revolutionized technology with its innovative devices, including the iPhone, MacBook, and Apple Watch.</p>
      <h2>Why Choose Apple?</h2>
      <p>
        <ul>
          <li>Cutting-edge technology</li>
          <li>Seamless ecosystem</li>
          <li>Unparalleled design and performance</li>
        </ul>
      </p>
    </div>
  );
}

export default App;