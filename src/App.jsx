import { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import * as Page from './pages';
import { Modal } from './components/Modal/Modal';
import { IngredientDetails } from './components/IngredientDetails/IngredientDetails';
import { useDispatch } from 'react-redux';
import { getIngredients } from './store/entities/services/ingredients/actions';
import { checkUser } from './store/entities/services/user/actions';
import { Protected } from './components/ProtectedRoute/ProtectedRoute';
import { OrderDetails } from './components/OrderDetails/OrderDetails';


function App() { 

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(checkUser());
  }, [dispatch]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
   }, []); 

   let state = location.state; 

   const onClick = () => {
    navigate(-1);
  }


  return (<>
        <Routes location={state?.backgroundLocation || location}>
            <Route path="/"  element={<Page.Home />} />                      
            <Route path="/ingredients/:ingredientsID" element={<IngredientDetails />} />           
            <Route path="/login" element={<Protected unAuth='true' element={<Page.Login />} />} />
            <Route path="/profile" element={<Protected element={<Page.Profile />} />} />
            <Route path="/register" element={<Protected unAuth='true' element={<Page.Register />} />} />
            <Route path="/forgot-password" element={<Protected unAuth='true' element={<Page.ForgotPassword />} />} />
            <Route path="/reset-password" element={<Protected unAuth='true' element={<Page.ResetPassword />} />} />
            
            <Route path="*" element={<Page.NotFoundPage  />} />             
       </Routes>
       {state?.backgroundLocation && (<Routes>
        <Route path="/ingredients/:ingredientsID" element={<Modal onClick={onClick}><IngredientDetails /></Modal>} />
        <Route path="/orders/ordersDetail" element={<Protected element={<Modal onClick={onClick}><OrderDetails /></Modal>} />} />)
       </Routes>)}
  </>); 
}

export default App;
