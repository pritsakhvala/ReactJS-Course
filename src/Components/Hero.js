import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker" || heroName === "joker") {
    throw new Error("hii, not a hero");
  }
  return <div>{heroName}</div>;
}

export default Hero;
