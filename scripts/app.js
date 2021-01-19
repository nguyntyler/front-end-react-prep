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
})
	.then((response) => response.json()) //Step two.2 What comes back is a response and we want to get that response and make it json.
	.then((data) => {
		// This returns the joke as a full object.
		console.log(data);
		return data.joke; // We are pulling out only the joke key:value pair.
	})
	.then((theJoke) => {
		console.log(theJoke); // This just logs the joke itself from the object.
	});

// Turning above into async await.

async function main() {
	const response = await fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});
	const jokeData = await response.json();
	console.log(jokeData.joke);
}

main();
