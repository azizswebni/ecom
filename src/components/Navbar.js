import React from "react";
import { Nav } from "./navbarElements";
import { NavLink } from "./navbarElements";
import { NavLink2 } from "./navbarElements";
import { NavMenu } from "./navbarElements";
import { NavBtn } from "./navbarElements";
import { NavBtnLink } from "./navbarElements";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import PhoneAndroidTwoToneIcon from "@material-ui/icons/PhoneAndroidTwoTone";
import StorefrontIcon from "@material-ui/icons/Storefront";
const Navbar = () => {
  return (
    <>
      <Nav
        style={{
          borderRadius: "50px",
          marginTop: "-30px",
        }}
      >
        <NavLink2 to="/" activeStyle>
          <h1>E-Commerce</h1>
        </NavLink2>

        <NavMenu>
          <NavLink to="/outfit" activeStyle>
            <StorefrontIcon />
            Outfit
          </NavLink>
          <NavLink to="/food" activeStyle>
            <RestaurantMenuOutlinedIcon />
            Food
          </NavLink>

          <NavLink to="/smartphones" activeStyle>
            <PhoneAndroidTwoToneIcon />
            Technology
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/singup">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
