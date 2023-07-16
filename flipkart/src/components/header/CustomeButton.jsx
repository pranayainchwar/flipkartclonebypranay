import React, {useState, useContext} from 'react'
import { Box, Button, Typography, styled, Badge} from '@mui/material';
import {ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {  useSelector } from 'react-redux';
import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';



const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
margin:'0 3% 0 auto',
'& > *': {
marginRight:"40px |important",
fontSize:16,
alignItems:'center'
},
  [theme.breakpoints.down('md')]:{
    display:'block'
  }

}));
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  marginLeft: 20,
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  }
}));

const LoginButton = styled(Button)`
color:#2874F0;
background:#FFFFFF;
text-transform: none;
padding: 6px 40px;
margin-top: 8px;
border-radius: 2px;
box-shadow: none;
font-weight:600;
height:32px;  
`;
const CustomeButton = () => {
  const [open, setOpen]=useState(false);
  
  const {account, setAccount} = useContext(DataContext); 

   const {cartItems} = useSelector(state => state.cart);
  const openDialog = () =>{
    setOpen(true);
  }

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135, paddingLeft: 20 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, paddingLeft: 20 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomeButton;
