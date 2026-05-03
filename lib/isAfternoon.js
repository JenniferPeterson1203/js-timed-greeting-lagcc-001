function isAfternoon (time) {
	// Afternoon is from 12 PM (noon) to 7 PM (19:00) in military time
	// Check if the time parameter is within the afternoon range
	if(time >= 12 && time <= 19){
		return true;
	} else {
		return false;
	}
};

module.exports = isAfternoon;
