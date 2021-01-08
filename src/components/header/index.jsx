import React from "react";
import {
  CheckoutContainer,
  HeaderWrapper,
  Icon,
  ImageContainer,
} from "./styles";
import { connect } from "react-redux";
import Bag from "../../assets/icons/bag.svg";
import { Link } from "react-router-dom";

function Header({ total }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Icon>Shoppex</Icon>
      </Link>
      <CheckoutContainer>
        <p>₹{total}</p>
        <ImageContainer>
          <Link to="/checkout">
            <img src={Bag} alt="" />
          </Link>
        </ImageContainer>
      </CheckoutContainer>
    </HeaderWrapper>
  );
}
function mapStateToProps(state) {
  return {
    total: state.checkout.total,
  };
}
export default connect(mapStateToProps)(Header);
