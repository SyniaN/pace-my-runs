import React from "react";

export default class DistanceInput extends React.Component {
  render() {
    return (
      <div>
        <label>pace: </label>
        <input
          type="number"
          onChange={evt => this.props.onInputChange("pace_min", evt)}
          value={this.props.pace_min}
        />
        :
        <input
          type="number"
          onChange={evt => this.props.onInputChange("pace_sec", evt)}
          value={this.props.pace_sec}
        />
      </div>
    );
  }
}
