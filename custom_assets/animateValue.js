function animateValue(id, start, end, duration) {
  // assumes integer values for start and end

  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = end - Math.floor(remaining * range);
    if (value > obj.innerHTML) obj.innerHTML = value;
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
}

$(window).scroll(function () {
  var hT = $("#three").offset().top,
    hH = $("#three").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH / 2 - wH) {
    console.log("now");
    animateValue("prof", document.getElementById("prof").innerHTML, 24, 2000);
    animateValue("pubs", document.getElementById("pubs").innerHTML, 6, 2000);
    animateValue("univ", document.getElementById("univ").innerHTML, 4, 2000);
    animateValue(
      "scholars",
      document.getElementById("scholars").innerHTML,
      3,
      2000
    );
    animateValue(
      "awards",
      document.getElementById("awards").innerHTML,
      17,
      500
    );
    animateValue(
      "davidson",
      document.getElementById("davidson").innerHTML,
      1,
      500
    );
    return false;
  }
});
