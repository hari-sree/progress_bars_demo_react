import React from 'React';
import ReactDom from 'react-dom';
import styles from './ProgressBarCounter.css';

export default class ProgressBarCounter extends React.Component{
  onClick(){
    this.props.onCounterClick(this.props.counterValue);
  }
  render(){
    var counterLabel = this.props.counterValue >= 0 ? '+'+this.props.counterValue : this.props.counterValue;
    return(
      <div className='counterContainer'>
          <button className='barCounter' onClick= {this.onClick.bind(this)} >
            {counterLabel}
          </button>
      </div>
    );
  }
}
