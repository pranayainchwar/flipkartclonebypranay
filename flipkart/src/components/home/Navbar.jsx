import React from 'react';
import { Box,styled,Typography} from '@mui/material';
import { navData } from '../../constants/data';
  const Component = styled(Box)(({theme})=>({
display: 'flex',
 margin:'55 130 0 130',
 justifyContent:'space-between',
 overflow:'overlay',
 background:'#fff',
 [theme.breakpoints.down('lg')]:{
  margin:0

 }
  }))
 

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`;

const Text = styled(Typography)`
font-Size:14px;
font-Weight:600;
font-family: inherit;

`;
const Navbar = () => {
  return (
    <Box style={{ background:'#fff'}}>
      <Component>
        {navData.map((data, index) => (
          <Container key={index}>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  );
}

export default Navbar;
