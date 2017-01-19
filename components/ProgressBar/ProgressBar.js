import React from 'React';
import ReactDom from 'react-dom';
import styles from './ProgressBar.css';
import classnames from 'classnames';

export default class ProgressBar extends React.Component{
  render(){
    var isWithinLimit = this.props.value <= this.props.limit;
    var progressPercentage = (this.props.value/this.props.limit)*100;
    var barWidth = isWithinLimit? progressPercentage : 100;

    var barClasses = classnames(
      {
        'bar': true,
        'withinLimit': isWithinLimit,
        'overLimit': !isWithinLimit
      }
    );

    return(
      <div className="barContainer">
        <div className={barClasses} style={{width: barWidth + '%'}}>
          <span className="progressLabel">{Math.round(progressPercentage)}%</span>
        </div>
      </div>
    );
  }
}
