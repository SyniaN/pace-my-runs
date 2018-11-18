export const calculatePace = (hr, min, sec, dist) => {
  const time = hr * 60 + min + sec / 60;
  const pace = time / dist;
  return {
    pace_min: Math.floor(pace),
    pace_sec: Math.floor((pace % 1) * 60)
  };
};

export const calculateTime = (min, sec, dist) => {
  const pace = min + sec / 60;
  const time = pace * dist;
  return {
    time_hr: Math.floor(time / 60),
    time_min: Math.floor(time % 60),
    time_sec: Math.floor(time % 3600)
  };
};

export const calculatePaceOrTimeOrNeither = (
  time_hr,
  time_min,
  time_sec,
  pace_min,
  pace_sec,
  dist
) => {
  const time = time_hr * 60 + time_min + time_sec / 60;
  const pace = pace_min + pace_sec / 60;

  if (time > 0) {
    return calculatePace(time_hr, time_min, time_sec, dist);
  }

  if (pace > 0) {
    return calculateTime(pace_min, pace_sec, dist);
  }

  return {};
};
