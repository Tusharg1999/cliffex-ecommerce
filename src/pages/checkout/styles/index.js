import styled from "styled-components";

const CheckoutContentWrapper = styled.div`
display:flex;
flex-wrap:wrap;
hr{
    width:40%;
}
h1 {
    font-weight: 600;
  }
 
button{
    margin-top:20px;
    width:150px;
}
`
const CheckoutOrderList = styled.div`
overflow-y:auto;
flex:3;
height:80vh;
display:flex;
flex-direction:column;
align-items:center;
&::-webkit-scrollbar{
      display:none
  }

`

const Card = styled.div`
margin-top:20px;
  display: flex;
  justify-content:space-between;
  border-radius: 10px;
  width: 700px;
  height:300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
`
const CardContent = styled.div`
width:50%;
padding:10px;
display:flex;
flex-direction:column;
justify-content:center;
 h2{
    margin-top:15px;
    font-weight:400;
  }
  p{
    font-size:1.2rem;
    color:gray;
  }
  button{
   width:20px;
   color:black;
   border:none;
   background-color:transparent;
   cursor:pointer;
   font-size:1.7rem;
  }
  div{
    display:flex;
    align-items:center;
    p{
      margin-left:10px;
      margin-right:10px;
      margin-top:20px;
    }
  }
`

const CheckoutOrderBill = styled.div`
flex:1;
margin-top:200px;
height:300px;
padding:50px 100px;
display:flex;
flex-direction:column;
 p {
    color: gray;
    font-size:1.3rem;
    margin-top:4px;
  }
  h1{
      margin-bottom:40px;
  }
`
const CheckoutOrderBillDetails = styled.div`
display:flex;
`
const CardImage = styled.div`
height:100%;
width:300px;
img {
    width: 100%;
    min-height: 100%;
    opacity: 0.9;
  }
`

const ImageContainer = styled.div`
width:400px;
height:500px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
h1{
    margin-top:20px;
}
img{
    height:100%;
}
`

export {
  CheckoutContentWrapper,
  CheckoutOrderBill,
  CheckoutOrderList,
  CheckoutOrderBillDetails,
  ImageContainer,
  Card,
  CardContent,
  CardImage
}