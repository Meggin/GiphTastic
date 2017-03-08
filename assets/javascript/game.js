// Todo: create an on click event for submit button.

// Todo: when this event fires, append the user input to an array of strings, call topics.

// Todo: create function to create buttons for each item in the array.
// These buttons live in buttons-container.
// Need to work out if we should have a separate function for adding a single item to array
// and creating one new button at a time, in addition to creating full list of buttons from the array.

// Todo: create an event listener for when a user clicks on a topic button.
// When this event fires, need to remove the existing giphs displayed,
// showing giphs for selected topic.

// Todo: when user clicks submit, or when user clicks on button, it is triggering the call to the Giphy API.

// Todo: create function to call the Giphy API with search parameters based on the item clicked on,
// be it either the Submit button with user input values, or the button clicked on with a button title.
// Should return 10 gifs that match the search parameter.
// We need a static image, the mp4 for animation, the rating, and possibly other details like caption.

// Todo: display 10 returned giphies in the display giphs section, with their ratings.

// Todo: create event listener for when user clicks on giph.

// Todo: create function to animate giph when click on giph event fires.
// Will use the mp4 to control animations.
// Thinking I need to use video API.

// Todo: create function to stop giph animation when user clicks a second time on a giph.
// Again, using mp4 to stop animations.
// And again, will use video API.

// Todo: I'm fairly sure that we don't want to hold up any content from appearing on the page,
// if available, so we will want to be careful about calling for data outside document.ready?
// Not exactly sure what the impact is, but will want to be wary of this.


// Data
//_____________________________________________________________________________________

var topics = ["dog", "cat", "bird", "snake"];


// Global variables
//____________________________________________________________________________________


// Event listeners
//____________________________________________________________________________________
// Add click event listener to all elements with a class of "topic".
$(document).on("click", ".topic", retrieveGiphs);

// Functions
//_____________________________________________________________________________________


// Render buttons for each topic in topics array.
function renderButtons() {
	// Delete the topics prior to adding new topics.
	// This is to avoid duplicate buttons.
	$("#buttons-container").empty();

	// Loop through the array of topics
	for (var i = 0; i < topics.length; i++) {

	  // Dynamically generate buttons for each topic in the array.
	  var a = $("<button>");
	  // Add a class of topic to button.
	  a.addClass("topic");
	  // Add a data-attribute needed for giph search.
	  a.attr("data-name", topics[i]);
	  // Provide initial button text.
	  a.text(topics[i]);
	  // Add button to the buttons-container div.
	  $("#buttons-container").append(a);
	}
}

// Retrieve giphs for selected topic.
function retrieveGiphs() {
	var topic = $(this).attr("data-name");

	// Todo: still need to set limit to 10 and deal with multiple items.
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic  + "&limit=10&api_key=dc6zaTOxFJmzC";  

	console.log("Query looks like this: " + queryURL); 

	// Create AJAX call for the specific topic.
	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(response) {

	  console.log(response);

	  // Display retrieved giphs.
	  displayGiphs(response);

	});
}

// Display giphs in DOM.
function displayGiphs(response) {

	// Delete existing giphs to make room for new giphs. 
	$("#display-giphs").empty();

	// Loop through array of giphy responses... 
	for (var i = 0; i < response.data.length; i++) {

		// Dynamically generate divs for each giph.
		var giphDiv = $("<div class='giph'>");

		// Store the rating data for a giph.
		var rating = response.data[i].rating;

		// Create an element to store the rating info.
		var ratingInfo = $("<p>").text("Rating: " + rating);

		// Display rating.
		giphDiv.append(ratingInfo);

		var giphURL = response.data[i].embed_url;

		var giphImage = $("<iframe>").attr("src", giphURL);

		// Add giph div to giph section.
		$("#display-giphs").append(giphDiv, giphImage);
	}
};

$(document).ready(function() {
	renderButtons();
});