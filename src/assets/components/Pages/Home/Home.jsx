import React from "react";
import { Main } from "../../Layouts/Main/Main";
import { Header } from "../../Layouts/Header/Header";
import { Products } from "../../Layouts/Products/Products";
import "./Home.css";

export function Home() {
  return (
    <>
        <Header />
      <div className="home_container">
        <Main />
    <Products />
      </div>
 
    </>
  );
}
