function isMorning(time){
	// Morning is from 6 AM to 11 AM in military time
	// Check if the time parameter is within the morning range
	if(time >= 6 && time <= 11){
		return true;
	} else {
		return false;
	}
};

module.exports = isMorning;
