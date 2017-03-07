// Todo: create an on click event for submit button.
// When this event fires, call the giphy sticker API to retrieve giph data
// based on the user input, i.e. chosen giph topic.

// Todo: append the user input to an array of strings, called topics.

// Todo: create function to create buttons for each item in the array.
// These buttons live in buttons-container.
// Need to work out if we should have a separate function for adding a single item to array
// and creating one new button at a time, in addition to creating full list of buttons from the array.

// Todo: need to call the Giphy API with search parameters based on user input.
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

// Todo: create an event listener for when a user clicks on a topic button.
// When this event fires, need to remove the existing giphs displayed,
// showing giphs for selected topic.


// Todo: need to work out how we store the data that comes back from Giphy for each topic selected.
// Todo: one tricky bit will be connecting a button to the data item.
// Todo: So for example, let's say we have dog button. When you click on dog button,
// dog giphs should display. Could relate them by a data attribute which is the same
// as the Giphy API search topic.

// Todo: I'm fairly sure that we don't want to hold up any content from appearing on the page,
// if available, so we will want to be careful about calling for data outside document.ready?
// Not exactly sure what the impact is, but will want to be wary of this.


// Data
//_____________________________________________________________________________________


// Global variables
//____________________________________________________________________________________


// Event listeners
//____________________________________________________________________________________


// Functions
//_____________________________________________________________________________________


$(document).ready(function() {


});