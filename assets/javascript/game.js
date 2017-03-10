// Global variable.
//____________________________________________________________________________________
// Array that will hold giphs.
var topics = [];


// Event listeners
//____________________________________________________________________________________
// Add click event listener to all elements with a class of "topic".
function addTopicClickEventListener() {
	$(".topic").on("click", function() {

		// Set topic to selected item.
		var topic = $(this).attr("data-name");
		console.log("This is the correct topic: " + topic);

		// Retrieve giphs for selected topic.
		retrieveGiphs(topic);
	});
};

// Add click event listener to all elements with a class of "gif".
function addGiphClickEventListener() {
	$(".gif").on("click", function() {
	  // Set the value of "data-state" attribute.
	  var state = $(this).attr("data-state");
	  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
	  // Then, set the image's data-state to animate.
	  // Else set src to the data-still value.
	  if (state === "still") {
	    $(this).attr("src", $(this).attr("data-animate"));
	    $(this).attr("data-state", "animate");
	  } else {
	    $(this).attr("src", $(this).attr("data-still"));
	    $(this).attr("data-state", "still");
	  }
	});
};

// Add click event listener to all elements with "add-animal" ID.
function addNewTopicClickEventListener() {
	$("#add-animal").on("click", function() {

	  event.preventDefault();

	  // Create new topic from input value.
	  var newTopic = $("#topic-input").val().trim();

	  console.log("New topic: " + newTopic);

	  // Don't create a new topic for an empty string.
	  if (newTopic === "") {
	  	return;

	  // Push new topic to array.
	  // Render buttons to include new topic.
	  // Retrieve giphs for new topic.
	  } else {
	  	topics.push(newTopic);

	  	renderButtons();


	  	var topic = newTopic;
	  	retrieveGiphs(topic);

	  	// Clear out input text as a courtesy to your user.
	  	$("input:text").val("");
	  }

	});
}

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
	// Add listeners to dynamic buttons.
	addTopicClickEventListener();
}
// Retrieve giphs for selected topic.
function retrieveGiphs(topic) {

	// Query giphy API to retrieve 10 giphs matching the topic.
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

	// Loop through array of giph responses... 
	for (var i = 0; i < response.data.length; i++) {

		// Dynamically generate divs for each giph.
		var giphDiv = $("<div class='giph'>");

		// Store the rating data for a giph.
		var rating = response.data[i].rating;

		// Create an element to store the rating info.
		var ratingInfo = $("<p>").text("Rating: " + rating);

		// Display rating.
		giphDiv.append(ratingInfo);

		// Store original gif for animations.
		var originalGiph = response.data[i].images.original.url;

		// Store still version of gif for still state.
		var stillGiph = response.data[i].images.original_still.url;

		// Append src to image.
		var giphImage = $("<img>").attr("src", stillGiph);

		giphImage.addClass("gif");

		giphImage.attr("data-still", stillGiph);

		giphImage.attr("data-animate", originalGiph);

		// Default src displayed is still giph.
		giphImage.attr("data-state", "still");

		// Add giph div to giph section.
		$("#display-giphs").append(giphDiv, giphImage);

	}

	// Add listeners to dynamic giphs.
	addGiphClickEventListener();
};

$(document).ready(function() {
	// We don't need to render buttons with an empty array at the start.
	// But it's nice to have the option to give the array values
	// And this will make it work at the start.
	renderButtons();
	// Input form is in the html file.
	// So listener needed when document ready.
	addNewTopicClickEventListener();
});