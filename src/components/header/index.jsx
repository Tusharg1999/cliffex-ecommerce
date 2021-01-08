import React from 'react'
import { CheckoutContainer, HeaderWrapper, Icon, ImageContainer } from './styles'

import Bag from "../../assets/icons/bag.svg";

function Header() {
    return (
      <HeaderWrapper>
        <Icon>Shoppex</Icon>
        <CheckoutContainer>
          <p>₹300</p>
          <ImageContainer>
            <img src={Bag} alt="" />
          </ImageContainer>
        </CheckoutContainer>
      </HeaderWrapper>
    );
}

export default Header
