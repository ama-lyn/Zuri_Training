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
