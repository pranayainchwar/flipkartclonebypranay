
//components (./for same===scr folder and ../ for out of that(other than src ie public) folder)
import Home from './components/home/Home';
import Header from './components/header/Header';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
 import DataProvider from './context/DataProvider';
 
import {Box} from '@mui/material';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
