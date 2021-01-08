import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button";
import Empty from "../../assets/svg/empty.svg";
import Header from "../../components/header";
import {
  Card,
  CardImage,
  CheckoutContentWrapper,
  CheckoutOrderBill,
  CheckoutOrderBillDetails,
  CheckoutOrderList,
  ImageContainer,
  CardContent,
} from "./styles";

function Checkout({ checkoutList, checkoutTotal }) {
  const [gst, setGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    let ammount = (5 / 100) * checkoutTotal;
    setGst(ammount);
  }, []);

  useEffect(() => {
    let ammount = checkoutTotal + gst;
    setGrandTotal(ammount);
  }, []);

  return (
    <div>
      <Header />
      <CheckoutContentWrapper>
        <CheckoutOrderList>
          {checkoutList.length > 0 ? (
            checkoutList.map((el) => (
              <Card>
                <CardImage>
                  <img src={el.image} alt="" />
                </CardImage>
                <CardContent>
                  <h1>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h1>
                  <h2>₹{el.price}</h2>
                  <p>{el.desc}</p>
                  <div>
                    <button>+</button>
                    <p>{el.quantity}</p>
                    <button>-</button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <ImageContainer>
              <img src={Empty} />
              <h1>Empty Cart,Please add Something</h1>
            </ImageContainer>
          )}
        </CheckoutOrderList>
        <CheckoutOrderBill>
          <h1>Order Summary</h1>
          <div>
            <CheckoutOrderBillDetails>
              <h2>Amount: </h2>
              <p>₹{checkoutTotal}</p>
            </CheckoutOrderBillDetails>
          </div>
          <div>
            <CheckoutOrderBillDetails>
              <h2>GST: </h2>
              <p>₹{gst}</p>
            </CheckoutOrderBillDetails>
          </div>
          <hr />
          <div>
            <CheckoutOrderBillDetails>
              <h2>Total: </h2>
              <p>₹{grandTotal}</p>
            </CheckoutOrderBillDetails>
          </div>
          <hr />
          <div>
            <Button>Order now</Button>
          </div>
        </CheckoutOrderBill>
      </CheckoutContentWrapper>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    checkoutList: state.checkout.checkoutList,
    checkoutTotal: state.checkout.total,
  };
}
export default connect(mapStateToProps)(Checkout);
