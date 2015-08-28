var oReq = new XMLHttpRequest();
oReq.onreadystatechange = weather;

// Current San Francisco Weather
var url = "http://api.openweathermap.org/data/2.5/weather?id=5391959";
// NOTE: If executing in the browser console, it must be on a http (not https) webpage.
// Otherwise, an error will probably occur. Don't worry about it.


oReq.open('GET', url);
oReq.send();

function weather() {
	if (oReq.status === 200) {
		console.log("The weather is up to date.");
	}
	else {
		console.log("The weather has not been updated.")
	}
};






