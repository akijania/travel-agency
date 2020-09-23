import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
    
  it('should have correct link', () => {
    const expectedIdLink = '/trip/abc';
    const expectedId = 'abc';
    const expectedImageSrc = 'image.jpg';
    const expectedName = 'image';
    const expectedTags=['tag'];
    const expectedCost= '$500.00';
    const expectedDays= 5;
    const component = shallow(<TripSummary id={expectedId} image={expectedImageSrc} name={expectedName} tags={expectedTags} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('Link').prop('to')).toEqual(expectedIdLink);
  });
  it('should render correct image src and alt', () => {
    const expectedId = 'abc';
    const expectedImageSrc = 'image.jpg';
    const expectedName = 'image';
    const expectedTags=['tag'];
    const expectedCost= '$500.00';
    const expectedDays= 5;
    const component = shallow(<TripSummary id={expectedId} image={expectedImageSrc} name={expectedName} tags={expectedTags} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });
  it('should render correct name, cost, days', () => {
    const expectedId = 'abc';
    const expectedImageSrc = 'image.jpg';
    const expectedName = 'image';
    const expectedTags=['tag'];
    const expectedCost= '$500.00';
    const expectedDays= 5;
    const component = shallow(<TripSummary id={expectedId} image={expectedImageSrc} name={expectedName} tags={expectedTags} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(expectedDays + ' days');
    expect(component.find('.details span').at(1).text()).toEqual('from ' + expectedCost);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render correct tags', () => {
    const expectedId = 'abc';
    const expectedImageSrc = 'image.jpg';
    const expectedName = 'image';
    const expectedTags=['last-minute', 'children', 'all inclusive'];
    const expectedCost= '$500.00';
    const expectedDays= 5;
    const component = shallow(<TripSummary id={expectedId} image={expectedImageSrc} name={expectedName} tags={expectedTags} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
    
  });  
  it('should not render div when props tags is false ', () => {
    const expectedId = 'abc';
    const expectedImageSrc = 'image.jpg';
    const expectedName = 'image';
    const expectedTags=[];
    const expectedCost= '$500.00';
    const expectedDays= 5;
    const component = shallow(<TripSummary id={expectedId} image={expectedImageSrc} name={expectedName} tags={expectedTags} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('.tags span').exists()).toEqual(false);
    expect(component.find('.tags').exists()).toEqual(false);
  });

  
  
});