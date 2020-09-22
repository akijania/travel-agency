import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import styles from './OrderForm.scss';


const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(pricingData => (
      <Col key={pricingData.id} md={4} className={styles.component}>
        <OrderOption {...pricingData} currentValue={options[pricingData.id]} setOrderOption={setOrderOption} />
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
  setOrderOption: PropTypes.func,
};
export default OrderForm;