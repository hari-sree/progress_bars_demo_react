jest.autoMockOff();
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ProgressBarSelector = require('../components/ProgressBarSelector/ProgressBarSelector').default;

describe("ProgressBarSelector",() => {

  it('renders a dropdown', () => {
    var barSelectionData = [
      {label:'#progress1', value:0},
      {label:'#progress2', value:1}
    ];
    var component = TestUtils.renderIntoDocument(
      <ProgressBarSelector barSelectionData = {barSelectionData} selectedBar= '0' onBarSelection={(bar)=>{}}/>
    );
    const selectElements = TestUtils.scryRenderedDOMComponentsWithTag(component, 'select');
    expect(selectElements.length).toEqual(1);
  });

  it('renders the dropdown with an option for each bar', () => {
    var barSelectionData = [
      {label:'#progress1', value:0},
      {label:'#progress2', value:1},
      {label:'#progress3', value:2}
    ];
    var component = TestUtils.renderIntoDocument(
      <ProgressBarSelector barSelectionData = {barSelectionData} selectedBar= '0' onBarSelection={(bar)=>{}}/>
    );

    const selectElements = TestUtils.scryRenderedDOMComponentsWithTag(component, 'option');
    expect(selectElements.length).toEqual(3);
  });
}
);
