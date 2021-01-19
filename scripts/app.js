console.log("Hello world");

function processResponse() {
	return response.json();
} // This is the same as line 19

// How to fetch data.
/*
1. Make request using fetch
2. Grab the .joke
3. Render to page
*/

fetch("https://icanhazdadjoke.com", {
	//Step one
	headers: {
		Accept: "application/json", //Step two.1
	},
}).then((response) => response.json()); //Step two.2 What comes back is a response and we want to get that response and make it json.
