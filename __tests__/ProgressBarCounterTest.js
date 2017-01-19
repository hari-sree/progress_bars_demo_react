jest.autoMockOff();
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ProgressBarCounter = require('../components/ProgressBarCounter/ProgressBarCounter').default;

describe("ProgressBarCounter",() => {
  it('renders a button', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarCounter counterValue='42' onCounterClick={(counterValue)=>{}} />
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).toEqual(1);
  });

  it('renders the button with a plus prefix in label when value is positive', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarCounter counterValue='42' onCounterClick={(counterValue)=>{}} />
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
    var button = buttons[0];
    expect(button.textContent).toEqual('+42');
  });
  it('renders the button with the correct label when value is negative', () => {
    var component = TestUtils.renderIntoDocument(
      <ProgressBarCounter counterValue='-42' onCounterClick={(counterValue)=>{}} />
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
    var button = buttons[0];
    expect(button.textContent).toEqual('-42');
  });

}
);
