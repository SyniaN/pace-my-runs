import React, { Component } from "react";
import DistanceInput from "./DistanceInput";
import TimeInput from "./TimeInput";
import PaceInput from "./PaceInput";
import {
  calculateTime,
  calculatePace,
  calculatePaceOrTimeOrNeither
} from "./util";
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

  onInputChange(inputName, evt) {
    const value = parseInt(evt.target.value);

    if (value) {
      const stateClone = { ...this.state, [inputName]: value };
      const inputType = inputName.split("_")[0];
      const calculatedResults =
        inputType === "pace"
          ? calculateTime(
              stateClone.pace_min,
              stateClone.pace_sec,
              stateClone.dist
            )
          : inputType === "time"
            ? calculatePace(
                stateClone.time_hr,
                stateClone.time_min,
                stateClone.time_sec,
                stateClone.dist
              )
            : calculatePaceOrTimeOrNeither(
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
      <>
        <DistanceInput
          onInputChange={this.onInputChange}
          dist={this.state.dist}
        />
        <TimeInput
          onInputChange={this.onInputChange}
          time_hr={this.state.time_hr}
          time_min={this.state.time_min}
          time_sec={this.state.time_sec}
        />
        <PaceInput
          onInputChange={this.onInputChange}
          pace_min={this.state.pace_min}
          pace_sec={this.state.pace_sec}
        />
      </>
    );
  }
}

export default App;
