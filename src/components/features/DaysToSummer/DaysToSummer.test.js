import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {
  
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render title and description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);

  });
});

const trueDate = Date;
  
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};
const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
describe('Component DaysToSummer with mocked Time', () => {
  checkDescriptionAtDate('2021-06-20', '1 day to summer!');
  checkDescriptionAtDate('2020-06-20', '1 day to summer!');
  checkDescriptionAtDate('2020-06-19', '2 days to summer!');
  checkDescriptionAtDate('2020-05-19', '33 days to summer!');
  checkDescriptionAtDate('2020-10-02', '262 days to summer!');
  
});
describe('Component DaysToSummer with mocked Time during summer', () => {
  checkDescriptionAtDate('2020-06-23', '');  
  checkDescriptionAtDate('2020-07-23', ''); 
  checkDescriptionAtDate('2020-08-22', ''); 
});