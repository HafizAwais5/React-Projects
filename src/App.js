
import Home from './Routes/Home/Home.component';

import {Routes, Route} from 'react-router-dom';

import Navigation from './Routes/Navigation/Navigation.component';
import Authentication from './Routes/Authentication/Authentication.component';

import Shop from './Routes/shop/shop.component';
import CheckOut from './Routes/checkout/checkout.component';



const App = () => {

 return(
   <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path='shop' element={<Shop />} /> 
        <Route path='auth' element={<Authentication />} /> 
        <Route path='checkout' element={<CheckOut />} /> 
    </Route> 
   </Routes>
 );
 }
export default App;
