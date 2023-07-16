import React, { useState } from 'react';
import {Box, Button, styled} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/actions/cartActions"


      
const LeftContainer = styled(Box)(({theme})=>({
minWidth: '40%',
padding: '40px 0 0 80px',
[theme.breakpoints.down('md')]:{
  padding:'20px 40px'
}
}));
const Image = styled('img')({
    padding:'15px'
  });
  const StyledButton = styled(Button)(({theme})=>({
 width: '48%',
  height:'50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]:{
    width:'46%'
  },[theme.breakpoints.down('sm')]:{
    width:'48%'
  }
  }));


const ActionItems = ({product}) => {

 const [quantity, setQuantity]= useState(1);

  const navigate = useNavigate();

  const dispatch = useDispatch();

const {id} = product;

 const  addItemsToCart =()=>{
  dispatch(addToCart(id, quantity));
  //  setQuantity(quantity);
   navigate('/cart');

 }
// const buyNow =(e)=>{
//   e.preventDefault();
//   e.target.value();
// }

  return (
    <>
      <LeftContainer>
        <Box
          styled={{
            padding: "15px 20px",
            border: "1px solid #f0f0f0",
            width: "95%"
          }}
        >
          <Image src={product.detailUrl} alt="detailproduct" />
        </Box>
        <StyledButton
          varient="contained"
          onClick={()=> addItemsToCart()}
          style={{ marginRight: 10, background: "#ff9f00" }}
        >
          <ShoppingCartIcon />
          Add to Cart
        </StyledButton>

        <StyledButton 
        varient="contained" 
        //  onClick={(e)=> buyNow()}
         style={{ background: "#fb541b" }}>
          <FlashOnIcon />Buy Now
          </StyledButton>
          
      </LeftContainer>
    </>
  );
}

export default ActionItems;
