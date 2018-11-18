import React from "react";

export default class DistanceInput extends React.Component {
  render() {
    return (
      <div>
        <label>time: </label>
        <input
          onChange={evt => this.props.onInputChange("time_hr", evt)}
          value={this.props.time_hr}
        />
        :
        <input
          onChange={evt => this.props.onInputChange("time_min", evt)}
          value={this.props.time_min}
        />
        :
        <input
          onChange={evt => this.props.onInputChange("time_sec", evt)}
          value={this.props.time_sec}
        />
      </div>
    );
  }
}
