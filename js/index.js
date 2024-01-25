$(".context-menu").click((_) => {
  $("nav").css("display", "block");
  $("nav").animate({ width: "250px" }, 500);
  $("main").animate({ "margin-left": "250px" }, 500);
});

$("nav button").click((_) => {
  $("nav").animate({ width: 0 }, 500, (_) => {
    $("nav").css("display", "none");
  });
  $("main").animate({ "margin-left": 0 }, 500);
});

$(".singer-item-list h1").click((e) => {
  $(e.target).parent().next(".singer-item-text").slideToggle(500);
});

//DOM ready event
$(function () {
  //count down until 25/7/2025 midnight GMT+2 time
  countDownUntilDate("2025-07-25T00:00:00+02:00");
});

function countDownUntilDate(dateStr) {
  let futureDate = new Date(dateStr);
  let currentDate = Date.now();
  let timeUntilCountdownFinished = Math.max(futureDate - currentDate, 0);

  //run this function every second
  let interval = setInterval(() => {
    //get difference in days, hours, minutes and seconds
    let days = Math.floor(timeUntilCountdownFinished / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeUntilCountdownFinished / (1000 * 60 * 60)) % 24); 
    let minutes = Math.floor((timeUntilCountdownFinished / (1000 * 60)) % 60); 
    let seconds = Math.floor((timeUntilCountdownFinished / 1000) % 60); 

    //set these values to countdown html elements
    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);

    //if time has reached zero then stop countdown
    if (timeUntilCountdownFinished == 0) {
      clearInterval(interval);
    } else {
      //else remove a second from time
      timeUntilCountdownFinished -= 1000;
    }
  }, 1000);
}
