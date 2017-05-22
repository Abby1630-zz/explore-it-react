import React, {Component} from 'react';
// react-bootstrap imports
import Badge from 'react-bootstrap/lib/Badge';
// css imports
import './css/RewardCountdown.css'

class RewardCountdown extends Component {
  render() {
    return(
      <p>
        Complete
        <Badge bsClass="badge" className="explore-blue">{this.props.countUntilNextReward}</Badge>
          more activities for your next reward!
      </p>
    );
  }
}


export default RewardCountdown;
