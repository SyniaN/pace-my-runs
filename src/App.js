import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dist: 0,
      time_hr: 0,
      time_min: 0,
      time_sec: 0,
      pace_min: 0,
      pace_sec: 0
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  calculatePace(hr, min, sec, dist) {
    const time = hr * 60 + min + sec / 60;
    const pace = time / dist;
    return {
      pace_min: Math.floor(pace),
      pace_sec: Math.floor((pace % 1) * 60)
    };
  }

  calculateTime(min, sec, dist) {
    const pace = min + sec / 60;
    const time = pace * dist;
    return {
      time_hr: Math.floor(time / 60),
      time_min: Math.floor(time % 60),
      time_sec: Math.floor(time % 3600)
    };
  }

  calculatePaceOrTimeOrNeither(
    time_hr,
    time_min,
    time_sec,
    pace_min,
    pace_sec,
    dist
  ) {
    const time = time_hr * 60 + time_min + time_sec / 60;
    const pace = pace_min + pace_sec / 60;

    if (pace > 0) {
      return this.calculateTime(pace_min, pace_sec, dist);
    }

    if (time > 0) {
      return this.calculatePace(time_hr, time_min, time_sec, dist);
    }

    return {};
  }

  onInputChange(inputName, evt) {
    const value = parseInt(evt.target.value);

    if (value) {
      const stateClone = { ...this.state, [inputName]: value };
      const inputType = inputName.split("_")[0];
      const calculatedResults =
        inputType === "pace"
          ? this.calculateTime(
              stateClone.pace_min,
              stateClone.pace_sec,
              stateClone.dist
            )
          : inputType === "time"
          ? this.calculatePace(
              stateClone.time_hr,
              stateClone.time_min,
              stateClone.time_sec,
              stateClone.dist
            )
          : this.calculatePaceOrTimeOrNeither(
              stateClone.time_hr,
              stateClone.time_min,
              stateClone.time_sec,
              stateClone.pace_min,
              stateClone.pace_sec,
              stateClone.dist
            );

      const newState = {
        ...stateClone,
        ...calculatedResults
      };

      this.setState(newState);
    } else {
      this.setState({ [inputName]: undefined });
    }
  }

  render() {
    return (
      <div>
        <div>
          <label>distance: </label>
          <input
            type="number"
            onChange={evt => this.onInputChange("dist", evt)}
            value={this.state.dist}
          />
          km
        </div>
        <div>
          <label>time: </label>
          <input
            onChange={evt => this.onInputChange("time_hr", evt)}
            value={this.state.time_hr}
          />
          :
          <input
            onChange={evt => this.onInputChange("time_min", evt)}
            value={this.state.time_min}
          />
          :
          <input
            onChange={evt => this.onInputChange("time_sec", evt)}
            value={this.state.time_sec}
          />
        </div>
        <div>
          <label>pace: </label>
          <input
            type="number"
            onChange={evt => this.onInputChange("pace_min", evt)}
            value={this.state.pace_min}
          />
          :
          <input
            type="number"
            onChange={evt => this.onInputChange("pace_sec", evt)}
            value={this.state.pace_sec}
          />
        </div>
      </div>
    );
  }
}

export default App;
