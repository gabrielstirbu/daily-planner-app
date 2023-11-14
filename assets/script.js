// Creating the live date on the page using dayjs
function displayCurrentDay() {
    var currentDayElement = $("#currentDay");
    var currentDate = dayjs().format("dddd, MMMM D");
    currentDayElement.text("Today is " + currentDate);
}
// Call the function in order to be displayed on the page
displayCurrentDay();