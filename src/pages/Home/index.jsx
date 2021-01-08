import React from "react";
import Card from "../../components/card";
import { ProductWrapper } from "./styles";
import {getProductData} from '../../store/products/action'
import { connect } from "react-redux";
import { updateCheckoutList } from "../../store/checkout/action";

class Home extends React.Component {

  componentDidMount() {
    this.props.updateCheckoutList();
    this.props.getData();
  }

  render() {
    return (
      <div>
        <ProductWrapper>
          {this.props.products.map((product) => (
            <Card key={product.image} product={product} />
          ))}
        </ProductWrapper>
      </div>
    );
  }
}
function mapActionsToProps(dispatch){
  return{
    getData:()=>dispatch(getProductData()),
    updateCheckoutList:()=>dispatch(updateCheckoutList())
  }
}
function mapStateToProps(state){
  return{
    products:state.product.products
  }
}
export default connect(mapStateToProps,mapActionsToProps)(Home);
