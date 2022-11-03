import React from "react";
import css from "./Hero.module.css";
import { RiShoppingBagFill } from "react-icons/ri";
import HeroImage from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span> skin protection</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, fuga.
          </span>
        </div>
      </div>
      {/* Middle side with hero image */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImage} alt="HeroImg" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
