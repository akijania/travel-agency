import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import styles from './OrderForm.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  
  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId}) => (
  <Row>
    {pricing.map(pricingData => (
      <Col key={pricingData.id} md={4} className={styles.component}>
        <OrderOption {...pricingData} currentValue={options[pricingData.id]} setOrderOption={setOrderOption} />
      </Col>
    ))} 
    <Col md={4}>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId)}>Order now!</Button>
    </Col>
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
  
};
export default OrderForm;