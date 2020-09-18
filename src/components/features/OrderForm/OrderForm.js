import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({tripCost, options}) => (
  <Row>
    {pricing.map(pricingData => (
      <Col key={pricingData.id} md={4}>
        <OrderOption {...pricingData} />
      </Col>
    ))} 
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
};
export default OrderForm;