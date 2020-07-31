const trackerApp = {};

// listen for click on each module's buttons
// on click, parse button value and update appropriate life span
// toggle background to red when life = 0 to indicate game loss
trackerApp.incrementDecrement = () => {
  $("button").on("click", function () {
    const player = $(this).data("index"); // this is going to output 1 if user click on the first set of buttons;
    let lifeTotal = parseInt($(`.p${player}Life`).text());
    lifeTotal = lifeTotal + parseInt($(this).val());
    $(`.p${player}Life`).text(lifeTotal);
    if (lifeTotal <= 0) {
      $(`.p${player}Life`).addClass("noLife");
    } else {
      $(`.p${player}Life`).removeClass("noLife");
    }
  });
};

trackerApp.displaySetter = () => {
  // prevent users from entering empty string
  $("input").on({
    keydown: function (e) {
      if (e.which === 32) return false;
    },
  });
  // collect user inpput
  $("form").on("submit", function (e) {
    e.preventDefault();
    const playerNumber = parseInt($("#playerNumber").val());
    const startingLife = parseInt($("#startingLife").val());
    // reset form on invalid input
    // else show necessary player modules
    // populate user input life total
    if (
      isNaN(playerNumber) ||
      playerNumber < 1 ||
      playerNumber > 6 ||
      isNaN(startingLife) ||
      startingLife < 0
    ) {
      $("#displayPicker").find("input:text").val("");
    } else {
      for (let i = 1; i < playerNumber + 1; i++) {
        $(`.player${i}`).toggleClass("divHider");
      }
    }
    // change grid layout for over 4 players to maintain 2 rows, reflecting typical table layout
    if (playerNumber >= 5) {
      $(".wrapper").css("max-width", "1200px");
    }
    // send footer to bottom if too few modules to send it there
    if (playerNumber < 3) {
      $("footer").css("margin-top", "46rem");
    }
    for (i = 1; i <= playerNumber; i++) {
      $(`.p${i}Life`).html(startingLife);
    }
    // on valid input, scroll to initialized app
    if (
      !isNaN(playerNumber) &&
      !isNaN(startingLife) &&
      playerNumber < 7 &&
      playerNumber > 0
    ) {
      document.querySelector("#main").scrollIntoView({
        behavior: "smooth",
      });
      // hide initializer form
      $("header").slideToggle();
    }
  });
};

trackerApp.init = () => {
  trackerApp.incrementDecrement();
  trackerApp.displaySetter();
};

$(function () {
  trackerApp.init();
});
