import React from "react";

export default class DistanceInput extends React.Component {
  render() {
    return (
      <div>
        <label>distance: </label>
        <input
          type="number"
          onChange={evt => this.props.onInputChange("dist", evt)}
          value={this.props.dist}
        />
        km
      </div>
    );
  }
}
