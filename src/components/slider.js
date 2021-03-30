import MediaCard from "./MediaCards";
import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Produit from "./Produit";
export default class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = (value) => this.setState({ value });
  render() {
    return (
      <div>
        <Carousel
          slidesPerPage={2}
          slidesPerScroll={1}
          animationSpeed={1500}
          autoPlay={2500}
          arrows
          infinite
          stopAutoPlayOnHover
          offset={100}
          itemWidth={300}
          clickToChange
          value={this.state.value}
          onChange={this.onChange}
          arrowLeft={<ArrowBackIosIcon />}
          arrowRight={<ArrowForwardIosIcon />}
          addArrowClickHandler
          draggable={true}
        >
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
        </Carousel>
        <Dots value={this.state.value} onChange={this.onChange} number={10} />
      </div>
    );
  }
}
