function createClock(options) {
    let is24HourFormat = options.is24HourFormat || false;
    let alarmTime = options.alarmTime || null;
    let alarmSet = false;

    // Function to update the time
    function updateTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      return { hours, minutes, seconds };
    }

    // Function to get formatted time
    function getFormattedTime({ hours, minutes, seconds }) {
      if (is24HourFormat) {
        return (
          (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds)
        );
      } else {
        let hour12 = hours % 12;
        hour12 = hour12 ? hour12 : 12; // Adjust for 12 o'clock
        const ampm = hours < 12 ? "AM" : "PM";
        return (
          (hour12 < 10 ? "0" + hour12 : hour12) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds) + " " + ampm
        );
      }
    }

    // Function to check if alarm time is reached
    function checkAlarm({ hours, minutes, seconds }) {
      const currentTime = getFormattedTime({ hours, minutes, seconds });
      if (alarmTime && currentTime === alarmTime) {
        alert("Alarm! Time is up!");
        alarmSet = false;
        document.getElementById("alarmStatus").textContent = "Alarm Triggered!";
      }
    }

    // Function to set the alarm
    function setAlarm(time) {
      alarmTime = time;
      alarmSet = true;
      document.getElementById("alarmStatus").textContent = `Alarm set for ${time}`;
    }

    // Function to toggle the 24-hour format
    function toggleTimeFormat() {
      is24HourFormat = !is24HourFormat;
    }

    // Public API for the clock object
    return {
      updateTime,
      getFormattedTime,
      checkAlarm,
      setAlarm,
      toggleTimeFormat,
      getAlarmTime: () => alarmTime,
      getAlarmSet: () => alarmSet,
    };
  }

  // Create the clock instance with default options
  const myClock = createClock({ is24HourFormat: false });

  // Get references to DOM elements
  const clockDiv = document.getElementById("clock");
  const timeFormatSelect = document.getElementById("timeFormat");
  const toggleFormatButton = document.getElementById("toggleFormat");
  const alarmTimeInput = document.getElementById("alarmTime");
  const setAlarmButton = document.getElementById("setAlarm");
  const alarmStatus = document.getElementById("alarmStatus");

  // Function to update the clock display
  function updateClockDisplay() {
    const { hours, minutes, seconds } = myClock.updateTime();
    clockDiv.textContent = myClock.getFormattedTime({ hours, minutes, seconds });
    myClock.checkAlarm({ hours, minutes, seconds });
  }

  // Function to toggle the time format (12/24 hour)
  toggleFormatButton.addEventListener("click", () => {
    myClock.toggleTimeFormat();  // Toggle the clock format
    updateClockDisplay(); // Immediately update the display with new format
  });

  // Function to set the alarm time
  setAlarmButton.addEventListener("click", () => {
    const alarmTime = alarmTimeInput.value;
    alert(alarmTime);
  });

  // Update the clock every second
  setInterval(updateClockDisplay, 1000);
