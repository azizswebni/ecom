import React from "react";
import Carousel from "./Carousel";
import Produit from "./Produit";
import Shop from "./Shop";
import "./Body.css";
import * as Scroll from "react-scroll";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Sliders from "./slider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Body() {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "10px",
        }}
      >
        <Shop added="2" />
      </div>

      <div>
        <Element name="scroll-to-element">
          <Carousel />
        </Element>
        <div className="Produits">
          <Produit
            description="This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like."
            titre="T-SHIRT"
            price="20 Dinar"
            disponibility="Available"
            image="https://contents.mediadecathlon.com/p1188567/k$58c5d0cc162ea4530d4c62501005b600/tee-shirt-running-homme-run-dry-print-gris.jpg?&f=452x452"
          />
          <Produit
            price="25 Dinar"
            description="This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like."
            titre="SNEAKER"
            disponibility="Available"
            image="http://shoesenzo.com/wp-content/uploads/2020/07/41Leu3gBUFL-1.jpg"
          />
          <Produit
            description="This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like."
            titre="HAT"
            price="20 Dinar"
            disponibility="Available"
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/7aac39a2a0eb4cb4915ba887014c43b8_9366/Superlite_Hat_Black_CJ0445_01_standard.jpg"
          />
          <Produit
            description="This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like."
            titre="PANT"
            price="20 Dinar"
            disponibility="Available"
            image="https://www.haglofs.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-master-catalog-haglofs/default/dwfd0d397f/hi-res/6045442C5_S20_2_grey.jpg?sw=1500&sh=1500&sm=fit"
          />
        </div>
      </div>
      <Sliders />
      <Footer />
    </>
  );
}
