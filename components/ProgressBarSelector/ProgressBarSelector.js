import React from 'React';
import ReactDom from 'react-dom';
import styles from './ProgressBarSelector.css';

export default class ProgressBarSelector extends React.Component{
  onChange(barSelection){
    this.props.onBarSelection(barSelection.target.value);
  }
  render(){
    return(
      <div className='selectorContainer'>
          <select className='selection' onChange = {this.onChange.bind(this)} value={this.props.selectedBar}>
            {this.props.barSelectionData.map((selectionData)=>{
                return (
                  <option value={selectionData.value}>{selectionData.label}</option>
                );
            })}
          </select>
      </div>
    );
  }
}
