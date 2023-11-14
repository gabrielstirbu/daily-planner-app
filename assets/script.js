// Creating the live date on the page using dayjs
function displayCurrentDay() {
    var currentDayElement = $("#currentDay");
    var currentDate = dayjs().format("dddd, MMMM D");
    currentDayElement.text("Today is " + currentDate);
}
// Call the function in order to be displayed on the page
displayCurrentDay();

// Function to color the event considering the time
function colorCodeTimeblocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("data-hour"));

        if (blockHour < currentHour) {
            $(this).find(".description").addClass("past");
        } else if (blockHour === currentHour) {
            $(this).find(".description").addClass("present");
        } else {
            $(this).find(".description").addClass("future");
        }
    });
}
// Call the function in order to be displayed on the page
colorCodeTimeblocks();
