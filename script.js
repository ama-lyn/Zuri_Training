// Function to update the UTC time
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const currentUTCTime = new Date().getTime();
  utcTimeElement.textContent = currentUTCTime;
}

// Call the function to update the UTC time immediately
updateUTCTime();

// Set an interval to update the UTC time
setInterval(updateUTCTime, 1000);

// Function to get and display the current day
function getCurrentDay() {
  // Days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date
  const currentDate = new Date();

  const dayIndex = currentDate.getDay();

  const currentDay = daysOfWeek[dayIndex];

  const currentDayElement = document.querySelector('[id="DayOfTheWeek"]');
  currentDayElement.textContent = currentDay;
}

// Call the function to display the current day
getCurrentDay();
