$(document).ready(function () {
    // Function to display current day
    function displayCurrentDay() {
        // Get the current date
        var currentDay = dayjs().format("dddd, MMMM D");
        // Update the content of the element with ID "currentDay"
        $("#currentDay").text(currentDay);
    }
    //Call function
    displayCurrentDay();
    // Function to create timeblocks
    function createTimeblocks() {
        // Get the container element with class "container"
        var container = $(".container");
        // Get the current hour using Day.js
        var currentHour = dayjs().hour();

        // Loop through hours from 9AM to 5 PM
        for (var hour = 9; hour <= 17; hour++) {
            // Create a new timeblock element with class "row time-block" (Used Bootstrap as an example)
            var timeblock = $("<div>").addClass("row time-block");
            // Create an element to display the hour md-1 - Boostrap format
            var hourDiv = $("<div>").addClass("hour col-md-1").text(formatHour(hour));
            // Create a textarea element for the description div
            var descriptionDiv = $("<textarea>").addClass("description col-md-10");

            // Color timeblocks 
            if (hour < currentHour) {
                descriptionDiv.addClass("past");
            } else if (hour === currentHour) {
                descriptionDiv.addClass("present");
            } else {
                descriptionDiv.addClass("future");
            }

            // Create a save button element and addind the Font Awesome icon props
            var saveBtn = $("<button>")
                .addClass("saveBtn col-md-1")
                .html('<i class="fas fa-save"></i>');

            // Get event from local storage and display it
            var savedEvent = localStorage.getItem(formatHour(hour));
            if (savedEvent) {
                descriptionDiv.val(savedEvent);
            }

            // Save button click event
            saveBtn.on("click", function () {
                // Get the event text from the sibling textarea
                var eventText = $(this).siblings(".description").val();
                // Get the hour associated with the timeblock
                var eventHour = $(this).parent().attr("data-hour");
                // Save the event text to local storage with the hour as the key
                localStorage.setItem(eventHour, eventText);
            });

            // Set the data-hour attribute of the timeblock for reference
            timeblock.attr("data-hour", formatHour(hour));
            // Append elements to the timeblock
            timeblock.append(hourDiv, descriptionDiv, saveBtn);

            // Append the timeblock to the container
            container.append(timeblock);
        }
    }
    // Call function
    createTimeblocks();

    // Function to format the hour for display
    function formatHour(hour) {
        // Format the hour using Day.js to display in "h AM/PM" format
        return dayjs().hour(hour).format("h A");
    }

});