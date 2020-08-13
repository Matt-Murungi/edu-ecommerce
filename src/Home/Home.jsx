import React from "react";

import "./Home.css";
import Product from "./Product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__carousel"></div>
      <h1>Accessories</h1>

      <div className="home__row">
        <Product
          title="Mary Jane"
          price="18.88"
          image="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />

        <Product
          title="Mary Jane"
          price="18.88"
          image="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
}

export default Home;
