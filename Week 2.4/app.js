function createClock(options) {
    let is24HourFormat = options.is24HourFormat || false;
    let alarmTime = options.alarmTime || null;
    let alarmSet = false;

    function updateTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      return { hours, minutes, seconds };
    }

    function getFormattedTime({ hours, minutes, seconds }) {
      if (is24HourFormat) {
        return (
          (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds)
        );
      } else {
        let hour12 = hours % 12;
        hour12 = hour12 ? hour12 : 12; 
        const ampm = hours < 12 ? "AM" : "PM";
        return (
          (hour12 < 10 ? "0" + hour12 : hour12) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds) + " " + ampm
        );
      }
    }

    function checkAlarm({ hours, minutes, seconds }) {
      const currentTime = getFormattedTime({ hours, minutes, seconds });
      if (alarmTime && currentTime === alarmTime) {
        alert("Alarm! Time is up!");
        alarmSet = false;
        document.getElementById("alarmStatus").textContent = "Alarm Triggered!";
      }
    }

    function setAlarm(time) {
      alarmTime = time;
      alarmSet = true;
      document.getElementById("alarmStatus").textContent = `Alarm set for ${time}`;
    }

    function toggleTimeFormat() {
      is24HourFormat = !is24HourFormat;
    }

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

  const myClock = createClock({ is24HourFormat: false });

  const clockDiv = document.getElementById("clock");
  const timeFormatSelect = document.getElementById("timeFormat");
  const toggleFormatButton = document.getElementById("toggleFormat");
  const alarmTimeInput = document.getElementById("alarmTime");
  const setAlarmButton = document.getElementById("setAlarm");
  const alarmStatus = document.getElementById("alarmStatus");


  function updateClockDisplay() {
    const { hours, minutes, seconds } = myClock.updateTime();
    clockDiv.textContent = myClock.getFormattedTime({ hours, minutes, seconds });
    myClock.checkAlarm({ hours, minutes, seconds });
  }


  toggleFormatButton.addEventListener("click", () => {
    myClock.toggleTimeFormat();  
    updateClockDisplay(); 
  });


  setAlarmButton.addEventListener("click", () => {
    const alarmTime = alarmTimeInput.value;
    alert(alarmTime);
  });

  setInterval(updateClockDisplay, 1000);
