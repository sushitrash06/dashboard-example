import React, { useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import './ImageWelcome.scss'

const images = [
  "/assests/piggy-bank.svg",
  "/assests/app.svg",
  "/assests/online-shop.svg",
  "/assests/retail.png",
];

const ImageWelcome = () => {
  const [newImage, setnewImage] = useState("/assests/piggy-bank.svg");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * images.length);
    setnewImage(images[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="transition-container">
      <Image
        className="transition-container image-transition"
        src={newImage}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default ImageWelcome;
