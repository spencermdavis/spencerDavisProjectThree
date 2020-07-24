const trackerApp = {};

trackerApp.incrementDecrement = () => {
  $(".player1 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").text());
    lifeTotal++;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal++;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal++;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal++;
    $(".p4Life").text(lifeTotal);
  });
  $(".player5 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal++;
    $(".p5Life").text(lifeTotal);
  });
  $(".player6 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal++;
    $(".p6Life").text(lifeTotal);
  });
  $(".player1 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal--;
    $(".p1Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p1Life").css("background-color", "#A4243B");
      $(".p1Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player2 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal--;
    $(".p2Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p2Life").css("background-color", "#A4243B");
      $(".p2Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player3 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal--;
    $(".p3Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p3Life").css("background-color", "#A4243B");
      $(".p3Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player4 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal--;
    $(".p4Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p4Life").css("background-color", "#A4243B");
      $(".p4Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player5 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal--;
    $(".p5Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p5Life").css("background-color", "#A4243B");
      $(".p5Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player6 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal--;
    $(".p6Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p6Life").css("background-color", "#A4243B");
      $(".p6Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player1 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p4Life").text(lifeTotal);
  });
  $(".player5 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p5Life").text(lifeTotal);
  });
  $(".player6 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p6Life").text(lifeTotal);
  });
  $(".player1 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p1Life").text(lifeTotal);
    if (parseInt($(".p1Life").html()) <= 0) {
      $(".p1Life").css("background-color", "#A4243B");
      $(".p1Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player2 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p2Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p2Life").css("background-color", "#A4243B");
      $(".p2Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player3 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p3Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p3Life").css("background-color", "#A4243B");
      $(".p3Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player4 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p4Life").text(lifeTotal);
    if (lifetotal <= 0) {
      $(".p4Life").css("background-color", "#A4243B");
      $(".p4Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player5 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p5Life").text(lifeTotal);
    if (lifetotal <= 0) {
      $(".p5Life").css("background-color", "#A4243B");
      $(".p5Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player6 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p6Life").text(lifeTotal);
    if (lifetotal <= 0) {
      $(".p6Life").css("background-color", "#A4243B");
      $(".p6Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player1 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p4Life").text(lifeTotal);
  });
  $(".player5 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p5Life").text(lifeTotal);
  });
  $(".player6 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p6Life").text(lifeTotal);
  });
  $(".player1 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p1Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p1Life").css("background-color", "#A4243B");
      $(".p1Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player2 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p2Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p2Life").css("background-color", "#A4243B");
      $(".p2Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player3 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p3Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p3Life").css("background-color", "#A4243B");
      $(".p3Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player4 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p4Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p4Life").css("background-color", "#A4243B");
      $(".p4Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player5 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p5Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p5Life").text(lifeTotal);
    if (lifeTotal <= 0) {
      $(".p5Life").css("background-color", "#A4243B");
      $(".p5Life").css("border", "1px solid #eae0c2");
    }
  });
  $(".player6 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p6Life").html());
    lifeTotal = lifeTotal - 10;
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
  $("form").on("submit", function (e) {
    e.preventDefault();
    playerNumber = parseInt($("#playerNumber").val());
    console.log("trackerApp.displaySetter -> playerNumber", playerNumber);
    const startingLife = parseInt($("#startingLife").val());
    console.log("trackerApp.displaySetter -> startingLife", startingLife);
    if (isNaN(playerNumber)) {
      $("#playerNumber").reset();
    } else if (playerNumber < 0) {
      $("#playerNumber").reset();
    } else if (playerNumber === 0) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    } else if (playerNumber === 1) {
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    } else if (playerNumber === 2) {
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    } else if (playerNumber === 3) {
      $(".player4").toggleClass("divHider");
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    } else if (playerNumber === 4) {
      $(".player5").toggleClass("divHider");
      $(".player6").toggleClass("divHider");
    } else if (playerNumber === 5) {
      $(".player6").toggleClass("divHider");
    }
    if (isNaN(startingLife)) {
      $("#startingLife").reset();
    } else {
      $(".p1Life").html(startingLife);
      $(".p2Life").html(startingLife);
      $(".p3Life").html(startingLife);
      $(".p4Life").html(startingLife);
    }
    if (!isNaN(playerNumber) && !isNaN(startingLife)) {
      document.querySelector("#main").scrollIntoView({
        behavior: "smooth",
      });
    }
  });
};

trackerApp.lifeAlert = () => {};

trackerApp.init = () => {
  trackerApp.incrementDecrement();
  trackerApp.displaySetter();
};

$(function () {
  trackerApp.init();
});
