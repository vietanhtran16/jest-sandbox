export function timeConversion(s) {
  const [hours, minute, second] = s.slice(0, s.length - 2).split(":");
  const isAM = isTimeStampAM(s);
  if (hours === "12" && isAM) {
    return ["00", minute, second].join(":");
  }
  if (isAM || (hours === "12" && !isAM)) {
    return [hours, minute, second].join(":");
  }
  return [parseInt(hours) + 12, minute, second].join(":");
}

function isTimeStampAM(timeStamp) {
  return timeStamp.endsWith("AM");
}
