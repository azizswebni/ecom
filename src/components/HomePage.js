import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="Header">
        <div className="Des">
          <h1>The Most Advanced Marketplace Platform</h1>
          <h4>
            Our MarketPlace is modular and most advanced open source marketplace
            platform build with React.
          </h4>
        </div>
      </div>
      <div className="Needs">
        <h1>All You Need In This Platform</h1>
        <div className="imgs">
          <div>
            <img
              id="img1"
              src="https://image.freepik.com/vecteurs-libre/programmeur-homme-travaillant-ordinateur-code-ecran-illustration_87749-275.jpg"
            />
            <h2>SignIn or SignUp</h2>
            <p>
              To complete your Shopping you should Have an account in Our
              Platform
            </p>
          </div>
          <div>
            <img
              id="img2"
              src="https://thumbs.dreamstime.com/b/vector-illustration-woman-make-online-payment-mobile-phone-application-young-women-holding-credit-card-make-payment-concept-169636071.jpg"
            />
            <h2>Credit Card</h2>
            <p>You Must Have a Credit Card to Complete Payment process</p>
          </div>
          <div>
            <img
              id="img3"
              src="https://unblast.com/wp-content/uploads/2020/01/Internet-Shopping-Illustration.jpg"
            />
            <h2>Make you Choice</h2>
            <p>Enjoy your self by consulting our Products </p>
          </div>
        </div>
      </div>
      <div className="Promotions">
        <img src="https://cdn.scopicsoftware.com/wp-content/uploads/2020/11/Scopic-Referral-Program.jpg" />
        <img src="https://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg" />
        <img src="https://image.freepik.com/vecteurs-libre/illustration-isometrique-promotion-entreprises-illustration-isometrique-du-marketing-medias-sociaux_7209-240.jpg" />
      </div>
      <Footer />
    </div>
  );
}
