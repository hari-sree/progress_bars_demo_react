jest.autoMockOff()
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ProgressBarsControl = require('../components/ProgressBarsControl/ProgressBarsControl').default;
const ProgressBarSelector = require('../components/ProgressBarSelector/ProgressBarSelector').default;
const ProgressBarCounter = require('../components/ProgressBarCounter/ProgressBarCounter').default;

describe("ProgressBarControl",() => {

  it('renders with the correct label', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarsControl />
    );
    component.setState({
      barData:{"buttons":[49,5,-23,-35],"bars":[47,86],"limit":200},
      selectedBar:0
    });
    const headers = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h2');
    var header = headers[0];
    expect(header.textContent).toEqual('Progress Bar Demo');
  });

  it('renders with one bar selector', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarsControl />
    );
    component.setState({
      barData:{"buttons":[49,5,-23,-35],"bars":[47,86],"limit":200},
      selectedBar:0
    });
    const barSelectors = TestUtils.findRenderedComponentWithType(component, ProgressBarSelector );
  });

  it('renders with four buttons when api returns four buttons data', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarsControl />
    );
    component.setState({
      barData:{"buttons":[49,5,-23,-35],"bars":[47,86],"limit":200},
      selectedBar:0
    });
    const buttons = TestUtils.scryRenderedComponentsWithType(component, ProgressBarCounter );
    expect(buttons.length).toEqual(4);
  });
}
);
