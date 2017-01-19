import React from 'React';
import ReactDom from 'react-dom';
import styles from './ProgressBarsControl.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import ProgressBarSelector from '../ProgressBarSelector/ProgressBarSelector';
import ProgressBarCounter from '../ProgressBarCounter/ProgressBarCounter';
import {
  BAR_DATA_API_URL
} from '../Urls';
import {
  HEADER_MESSAGE
} from '../Constants';
import Axios from 'axios';

export default class ProgressBarsControl extends React.Component{
  constructor(props){
    super(props);
    var defaultState = {
      barData: {
        buttons:[],
        bars:[],
        limit:0
      },
      selectedBar: 0
    };
    this.state = defaultState;
  }

  componentDidMount(){
    Axios.get(BAR_DATA_API_URL).then(
      (response)=>{
        var barData = response.data;
        this.setState({barData: barData});
      }
    );
  }
  updateBarValue(counterValue){
    var barData = this.state.barData;
    var newBarValue = barData.bars[this.state.selectedBar] + counterValue;
    newBarValue = (newBarValue < 0) ? 0 : newBarValue;
    barData.bars[this.state.selectedBar] = newBarValue;
    this.setState({barData: barData});
  }
  render(){
    var barData = this.state.barData;
    var barSelectionData = barData.bars.map((bar,index) => {
      return ({label:'#progress'+(index+1), value:index})
    });

    return(
      <div className="progress-bar-container">
        <h2 className="controlHeader">{HEADER_MESSAGE}</h2>
        {barData.bars.map((barValue) => {
          return (
            <ProgressBar limit={barData.limit} value={barValue}/>
          );
        })}
        <ProgressBarSelector barSelectionData = {barSelectionData}
                             selectedBar= {this.state.selectedBar}
                             onBarSelection={(bar)=>{
                               this.setState({selectedBar: bar});
                             }
        }/>
        {barData.buttons.map((counterValue) => {
          return (
            <ProgressBarCounter counterValue={counterValue} onCounterClick={this.updateBarValue.bind(this)}/>
          );
        })}
      </div>
    );
  }
}
