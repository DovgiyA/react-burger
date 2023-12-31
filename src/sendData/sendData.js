import { SENDING } from "../constants/constants";
import { response } from "../utils/props-type";
import PropTypes from 'prop-types';
import { request } from "../utils/request";


export const sendData = async (ingredientsWithoutBuns, buns) => {

    if (!ingredientsWithoutBuns.length) {    
      return;
    }

    const ordersData = ingredientsWithoutBuns.reduce((acc, item) => [...acc, item.ingredient], [buns])
 

    const jsonForSending = JSON.stringify({ingredients: ordersData});
    
    return await request(SENDING, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonForSending,
    }); 
  }

  sendData.propTypes = {    
    ordersData:  PropTypes.arrayOf(response).isRequired,    
  };