setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (second < 10) {
        second = "0" + second;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (hour < 10) {
        minute = "0" + minute;
    }

    let clockElement = document.getElementById("clock");
    clockElement.textContent = `${hour} : ${minute} : ${second}`;
}, 1000);