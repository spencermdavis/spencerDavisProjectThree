const trackerApp = {};

// listen for click on each module's buttons
// on click, parse button value and update appropriate life span
// toggle background to red when life = 0 to indicate game loss
trackerApp.incrementDecrement = () => {
  $(".player1Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p1Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p1Life").css("background-color", "#A4243B");
      $(".p1Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player2Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p2Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p2Life").css("background-color", "#A4243B");
      $(".p2Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player3Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p3Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p3Life").css("background-color", "#A4243B");
      $(".p3Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player4Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p4Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p4Life").css("background-color", "#A4243B");
      $(".p4Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player5Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p5Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p5Life").css("background-color", "#A4243B");
      $(".p5Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player6Buttons").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").text());
    lifeTotal = lifeTotal + parseInt(this.value);
    $(".p6Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p6Life").css("background-color", "#A4243B");
      $(".p6Life").css("border", "1px solid #eae0c2");
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
    playerNumber = parseInt($("#playerNumber").val());
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
    } else if (playerNumber === 1) {
      $(".player1").toggleClass("divHider");
    } else if (playerNumber === 2) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
    } else if (playerNumber === 3) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
    } else if (playerNumber === 4) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
    } else if (playerNumber === 5) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
    } else if (playerNumber === 6) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    }
    // change grid layout for over 4 players to maintain 2 rows, reflecting typical table layout
    if (playerNumber >= 5) {
      $(".wrapper").css("max-width", "1200px");
    }
    // send footer to bottom if too few modules to send it there
    if (playerNumber < 3) {
      $("footer").css("margin-top", "46rem");
    }
    $(".p1Life").html(startingLife);
    $(".p2Life").html(startingLife);
    $(".p3Life").html(startingLife);
    $(".p4Life").html(startingLife);
    $(".p5Life").html(startingLife);
    $(".p6Life").html(startingLife);
    // on valid input, scroll to initialized app
    if (!isNaN(playerNumber) && !isNaN(startingLife)) {
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
