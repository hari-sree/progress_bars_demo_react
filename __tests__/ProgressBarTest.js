jest.autoMockOff();
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ProgressBar = require('../components/ProgressBar/ProgressBar').default;

describe("ProgressBar",() => {

  it('renders a single bar', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBar limit='150' value='75' />
    );
    const bars = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
    expect(bars.length).toEqual(1);
  });

  it('renders a bar with 50% percentage when value is half the limit', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBar limit='150' value='75' />
    );
    const barLabels = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
    var barLabel = barLabels[0];
    expect(barLabel.textContent).toEqual('50%');
  });

  it('renders a bar with 100% percentage when value is half the limit', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBar limit='150' value='150' />
    );
    const barLabels = TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');
    var barLabel = barLabels[0];
    expect(barLabel.textContent).toEqual('100%');
  });

}
);
