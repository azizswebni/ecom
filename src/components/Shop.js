import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useItems } from "../useContext/Context";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Shop() {
  const shopItems = useItems();

  return (
    <Link to="/Panier">
      <Button
        variant="contained"
        style={{ borderRadius: "100px", width: "0px" }}
        color="main"
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={shopItems.numItems} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Button>
    </Link>
  );
}
