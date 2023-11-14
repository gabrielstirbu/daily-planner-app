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

// Function to load events from local storage
function loadEvents() {
    $(".time-block").each(function () {
        var blockHour = $(this).attr("data-hour");
        var savedEvent = localStorage.getItem(blockHour);

        if (savedEvent) {
            $(this).find(".description").val(savedEvent);
        }
    });
}

// Function to save events to local storage
$(".saveBtn").on("click", function () {
    var hour = $(this).closest(".time-block").attr("data-hour");
    var eventText = $(this).closest(".time-block").find(".description").val();

    localStorage.setItem(hour, eventText);
});

loadEvents();