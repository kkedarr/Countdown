
let deadline = new Date ("dec 31, 2024 23:59:59").getTime();


let x = setInterval(function () {
    let now = new Date().getTime(); //to get current data and time according to the format

    let t = deadline - now; // to calculate the difference 

    let days = Math.floor(t / (1000 * 60 * 60 * 24)) + 1; //to get the value of days

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //to get the value of hours

    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); // to get the value of minutes
    
    let seconds = Math.floor((t % (1000 * 60)) / 1000); //to get the value of seconds

    document.getElementById("day").innerHTML = days;

    document.getElementById("hour").innerHTML = hours;

    document.getElementById("minute").innerHTML = minutes;

    document.getElementById("second").innerHTML = seconds;

    //show overtime output

    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME IS UP!";

        document.getElementById("day").innerHTML = "0";

        document.getElementById("hour").innerHTML = "0";

        document.getElementById("minute").innerHTML = "0";

        document.getElementById("second").innerHTML = "0";
    }
}, 1000);