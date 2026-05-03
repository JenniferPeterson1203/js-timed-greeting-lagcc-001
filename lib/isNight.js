function isNight(time) {
  // Night is from 8 PM (20:00) to 5 AM (05:00) - it wraps around midnight!
  // So we need to check: is it 20-23 (8 PM to midnight) OR 0-5 (midnight to 5 AM)?
  if (time >= 20 || time <= 5) {
    return true;
  } else {
    return false;
  }
}

module.exports = isNight;
