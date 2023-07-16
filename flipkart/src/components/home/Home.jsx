import React,{useEffect} from 'react'
//components
import Navbar from './Navbar';
import Banner from './Banner';
import Slides from './Slides';
import Midslide from './Midslide';
import Midsection from './Midsection';

import {styled,Box} from '@mui/material';

import {getProducts} from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';

const Component = styled(Box)`
padding:  10px;
background: #f2f2f2;

`;


const Home = () => {
    
const {products} = useSelector((state) => state.getProducts);
console.log(products)


const dispatch = useDispatch();

  useEffect(()=>{
 dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title="Deal of the Day" timer={true}/>
        <Midsection />
        <Slides products={products} title="Discount for You" timer={false}/>
        <Slides products={products} title="Suggested Items"timer={false} />
        <Slides products={products} title="Top Selection" timer={false}/>
        <Slides products={products} title="Recommended Items " timer={false}/>
        <Slides products={products} title="Treading Offers" timer={false}/>
        <Slides products={products} title="Seasons Top Pick's" timer={false}/>
        <Slides products={products} title="Top Deals on Accesories" timer={false}/>
      </Component>
    </>
  );
}

export default Home;
