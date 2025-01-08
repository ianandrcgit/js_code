// Initialize counter variable
let counter = 0;

// Get the button element
const button = document.getElementById('incrementButton');

// Get the element where the counter value will be displayed
const counterDisplay = document.getElementById('counterValue');

// Function to increase counter and update the display
button.addEventListener('click', () => {
    counter++; // Increase counter by 1
    counterDisplay.textContent = counter; // Update the displayed counter value
    console.log(counter); // Log the counter to the console
});
