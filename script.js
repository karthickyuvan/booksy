

// Select the overlay element (used as a background for the popup)
var popupoverlay = document.querySelector(".popup-overlay")

// Select the popup box element (the main popup content)
var popupbox = document.querySelector(".popup-box")

// Select the button that triggers the popup to show
var addpopupbutton= document.getElementById("add-popup-button")

// Select the cancel button inside the popup
var cancelpopup=document.getElementById("cancel-popup")


// Add a click event listener to the button to show the popup when the Plus Button is Clicled
addpopupbutton.addEventListener("click",function()
{
        // Make the popup box visible
   popupbox.style.display="block"
       // Make the overlay visible
   popupoverlay.style.display="block"
})

// Add a click event listener to the cancel button to hide the popup
cancelpopup.addEventListener("click",function(event)
{
        // Prevent any default button behavior (e.g., form submission)
    event.preventDefault()
     // Hide the popup box
    popupbox.style.display="none"
     // Hide the popup box
    popupoverlay.style.display="none"
})

//Select the container,add-book,book-title,book-author-input,book-desc-input

// Select the container where new book entries will be added
var container = document.querySelector(".container")

// Select the "Add Book" button inside the popup
var addbook = document.getElementById("add-book"); 

// Select the input fields for book details
var book_title = document.getElementById("book-title-input"); // Input field for book title
var book_author = document.getElementById("book-author-input"); // Input field for book author
var book_description = document.getElementById("book-descprition-input"); // Input field for book description

// Add a click event listener to the "Add Book" button
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
// Create a new div to represent the book entry
    var div=document.createElement("div")
    // Add a class to the div for styling
    //creating a class for the newly created div and name the class 
    div.setAttribute("class","book-container")
    // Set the inner HTML of the div with the book details and a delete button
    div.innerHTML = `
        <h2>${book_title.value}</h2>
        <h5>${book_author.value}</h5>
        <br>
        <p>
           ${book_description.value}
        </p>
        <button onclick="deletebook(event)">Delete</button>`; 
    // Append the new book div to the main container
  container.append(div)
  // Hide the popup box
  popupbox.style.display="none"
  // Hide the popup box
 popupoverlay.style.display="none"

 // Clear the input fields for the next book entry
 book_title.value = ""; 
 book_author.value = ""; 
 book_description.value = ""; 

})
// Define the function to delete a book entry
function deletebook(event)
{
        // Remove the parent element of the clicked delete button (the book div)
        event.target.parentElement.remove();
}